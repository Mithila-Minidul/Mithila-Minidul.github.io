import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';

const username = 'Mithila-Minidul';
const year = new Date().getFullYear();
const from = `${year}-01-01`;
const to = `${year}-12-31`;
const url = `https://github.com/users/${encodeURIComponent(username)}/contributions?from=${from}&to=${to}`;
const response = await fetch(url, {
  headers: { 'User-Agent': 'Mithila-Minidul-Portfolio' },
});

if (!response.ok) {
  throw new Error(`GitHub contribution request failed with HTTP ${response.status}`);
}

const html = await response.text();
const heading = html.match(/<h2\b[^>]*id="js-contribution-activity-description"[^>]*>([\s\S]*?)<\/h2>/i)?.[1];
const summary = heading?.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
const summaryMatch = summary?.match(/^([\d,]+)\s+contributions?\s+in\s+(\d{4})$/i);

if (!summaryMatch) {
  throw new Error('Could not read the contribution total from GitHub. The page markup may have changed.');
}

const total = Number(summaryMatch[1].replaceAll(',', ''));
const calendarYear = Number(summaryMatch[2]);
const tooltipCounts = new Map();

for (const match of html.matchAll(/<tool-tip\b([^>]*)>([\s\S]*?)<\/tool-tip>/gi)) {
  const id = match[1].match(/\bfor="([^"]+)"/i)?.[1];
  if (!id) continue;

  const tooltip = match[2].replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
  const count = tooltip.match(/^([\d,]+)\s+contributions?\b/i)?.[1];
  tooltipCounts.set(id, count ? Number(count.replaceAll(',', '')) : 0);
}

const days = [];
for (const match of html.matchAll(/<td\b[^>]*>/gi)) {
  const tag = match[0];
  const date = tag.match(/\bdata-date="([^"]+)"/i)?.[1];
  const level = Number(tag.match(/\bdata-level="(\d+)"/i)?.[1]);
  const id = tag.match(/\bid="([^"]+)"/i)?.[1];
  if (!date || !id || !Number.isInteger(level)) continue;
  if (!date.startsWith(`${calendarYear}-`)) continue;
  days.push({ date, level, count: tooltipCounts.get(id) ?? 0 });
}

if (days.length < 350) {
  throw new Error(`GitHub returned only ${days.length} calendar days for ${calendarYear}; refusing to generate an incomplete chart.`);
}

const calendarTotal = days.reduce((sum, day) => sum + day.count, 0);
if (calendarTotal !== total) {
  throw new Error(`GitHub's calendar cells total ${calendarTotal}, but its profile reports ${total}; refusing to generate an inconsistent chart.`);
}

const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const colors = ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'];
const cell = 11;
const gap = 3;
const step = cell + gap;
const left = 42;
const top = 29;
const columns = Math.ceil((days.length + new Date(`${calendarYear}-01-01T00:00:00Z`).getUTCDay()) / 7);
const width = left + columns * step + 8;
const height = top + 7 * step + 22;
const firstWeekday = new Date(`${calendarYear}-01-01T00:00:00Z`).getUTCDay();
const monthLabels = new Set();
const cells = [];

for (const day of days) {
  const date = new Date(`${day.date}T00:00:00Z`);
  const dayOfYear = Math.floor((date.getTime() - Date.UTC(calendarYear, 0, 1)) / 86_400_000);
  const column = Math.floor((dayOfYear + firstWeekday) / 7);
  const weekday = date.getUTCDay();
  const x = left + column * step;
  const y = top + weekday * step;

  if (date.getUTCDate() === 1) {
    monthLabels.add(`<text x="${x}" y="14">${monthNames[date.getUTCMonth()]}</text>`);
  }

  const color = colors[Math.max(0, Math.min(day.level, colors.length - 1))];
  cells.push(
    `<rect x="${x}" y="${y}" width="${cell}" height="${cell}" rx="2" fill="${color}"><title>${day.count} contribution${day.count === 1 ? '' : 's'} on ${day.date}</title></rect>`,
  );
}

const svg = [
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" role="img" aria-labelledby="title description">`,
  `<title id="title">${total} GitHub contributions in ${calendarYear}</title>`,
  `<desc id="description">Contribution activity from GitHub for ${username}, grouped by day.</desc>`,
  `<g fill="#6e7781" font-family="system-ui,sans-serif" font-size="11">${[...monthLabels].join('')}`,
  `<text x="0" y="${top + step * 1 + 9}">Mon</text><text x="0" y="${top + step * 3 + 9}">Wed</text><text x="0" y="${top + step * 5 + 9}">Fri</text></g>`,
  `<g>${cells.join('')}</g>`,
  `<text x="0" y="${height - 2}" fill="#6e7781" font-family="system-ui,sans-serif" font-size="12">${total} contributions in ${calendarYear}</text>`,
  '</svg>',
].join('');

const output = resolve('public/github-contributions.svg');
await mkdir(dirname(output), { recursive: true });
await writeFile(output, svg);
console.log(`Generated GitHub's ${calendarYear} contribution chart: ${summary}`);
