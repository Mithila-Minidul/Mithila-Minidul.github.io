export interface TechnicalSkillCategory {
  group: string;
  description: string;
  items: string[];
}

export const technicalSkills: TechnicalSkillCategory[] = [
  {
    group: 'Frontend Development',
    description: 'Building responsive, modern, and interactive user interfaces.',
    items: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'React Native', 'Expo', 'Tailwind CSS', 'Astro'],
  },
  {
    group: 'Backend Architecture',
    description: 'Developing robust, secure, and scalable server-side systems.',
    items: ['Java', 'Spring Boot', 'Tomcat', 'Node.js', 'Express.js', 'Hono', 'Socket.io'],
  },
  {
    group: 'Database & Core Tools',
    description: 'Managing structured data, collaboration, and development workflows.',
    items: ['MySQL', 'Microsoft SQL Server', 'MongoDB', 'Git', 'GitHub', 'Postman'],
  },
  {
    group: 'Cloud & Deployments',
    description: 'Configuring hosting and deploying applications for production.',
    items: ['Vercel', 'Render', 'Railway', 'Netlify', 'Cloudinary'],
  },
];
