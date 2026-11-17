export interface TechnicalSkillCategory {
  group: string;
  description: string;
  items: string[];
}

export const technicalSkills: TechnicalSkillCategory[] = [
  {
    group: 'Frontend Development',
    description: 'Building responsive, modern, and interactive user interfaces.',
    items: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'React Native', 'Flutter', 'Expo', 'Tailwind CSS', 'Astro'],
  },
  {
    group: 'Backend Architecture',
    description: 'Developing robust, secure, and scalable server-side systems.',
    items: ['Java', '.NET', 'Python', 'Spring Boot', 'Node.js', 'Express.js', 'Socket.io', 'Firebase'],
  },
  {
    group: 'Database & Core Tools',
    description: 'Managing structured data, collaboration, and development workflows.',
    items: ['MySQL', 'PostgreSQL', 'Microsoft SQL Server', 'MongoDB', 'Git', 'GitHub', 'Postman'],
  },
  {
    group: 'Cloud & Deployments',
    description: 'Configuring hosting and deploying applications for production.',
    items: ['Vercel', 'Render', 'Railway', 'Cloudinary'],
  },
];
