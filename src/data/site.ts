export const site = {
  name: 'M.A Mithila Minidul',
  role: 'Software Engineer Undergraduate',
  headline: 'Software that feels effortless.',
  intro: 'I design and build fast, reliable products from the interface down to the database.',
  about: [
    'I am a software engineering undergraduate who enjoys building complete products, from the mobile interface to the API and the database.',
    'My main project is BoardMate, a location-aware boarding house marketplace for Sri Lanka. I work across React Native, Expo, Node.js, Express and MongoDB.',
  ],
  technicalSkills: [
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
  ],
  title: 'Mithila Minidul | Portfolio',
  description: 'Hi!. Iam Software engineer undergraduate at SLIIT. I am passinate to build mobile apps and webs and building fast, reliable products across mobile, web and backend.',
  url: 'https://MithilaMinidul.github.io',
  email: 'minidulwijesinghe@gmail.com',
  links: {
    github: 'https://github.com/MithilaMinidul',
    linkedin: 'https://linkedin.com/in/YOUR_HANDLE',
  },
  nav: [
    { label: 'About', href: '/#about' },
    { label: 'Education', href: '/#education' },
    { label: 'Skills', href: '/#skills' },
    { label: 'Work', href: '/#work' },
    { label: 'Contact', href: '/#contact' },
  ],
} as const;