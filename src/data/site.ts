export const site = {
  name: 'M.A Mithila Minidul',
  role: 'Software Engineer Undergraduate',
  headline: 'Software that feels effortless.',
  intro: 'I design and build fast, reliable products from the interface down to the database.',
  about: [
    'I am a software engineering undergraduate who enjoys building complete products, from the mobile interface to the API and the database.',
    'My main project is BoardMate, a location-aware boarding house marketplace for Sri Lanka. I work across React Native, Expo, Node.js, Express and MongoDB.',
  ],
  skills: [
    { group: 'Mobile and frontend', items: ['React Native', 'Expo', 'Tailwind CSS'] },
    { group: 'Backend', items: ['Node.js', 'Express', 'Socket.io'] },
    { group: 'Data and services', items: ['MongoDB', 'Cloudinary'] },
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
    { label: 'Work', href: '/#work' },
    { label: 'About', href: '/#about' },
    { label: 'Contact', href: '/#contact' },
  ],
} as const;