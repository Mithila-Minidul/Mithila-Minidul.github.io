export interface Project {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  featured?: boolean;   // wide card
  caseStudy?: boolean;  // shows a "Read case study" link to /work/<slug>
}

export const projects: Project[] = [
  {
    slug: 'boardmate',
    title: 'BoardMate',
    summary:
      'A mobile app that helps people in Sri Lanka find boarding houses. Built end to end: the app, the API and the database.',
    tags: ['React Native', 'Expo', 'Node.js', 'Express', 'MongoDB'],
    featured: true,
    caseStudy: true,
  },
  {
    slug: 'project-two',
    title: 'Project two',
    summary: 'Replace with a short case study: the problem, your key decision and the result.',
    tags: ['Your', 'Stack'],
  },
  {
    slug: 'project-three',
    title: 'Project three',
    summary: 'Replace with another project. Link to code or a live demo where you can.',
    tags: ['Your', 'Stack'],
  },
  {
    slug: 'project-four',
    title: 'Project four',
    summary: 'Replace with your next project, or remove this card and the grid will adapt.',
    tags: ['Your', 'Stack'],
    featured: true,
  },
];