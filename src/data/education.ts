export interface EducationEntry {
  institution: string;
  logo: string;
  logoAlt: string;
  period: string;
  qualification: string;
  status: string;
  highlights: string[];
}

export const education: EducationEntry[] = [
  {
    institution: 'Sri Lanka Institute of Information Technology (SLIIT)',
    logo: '/education/sliit.png',
    logoAlt: 'Sri Lanka Institute of Information Technology logo',
    period: 'Mar 2024 - Present',
    qualification: 'BSc. (Hons) in Information Technology specializing in Software Engineering',
    status: '3rd Year Undergraduate Student',
    highlights: [
      'Deepening knowledge in advanced software architecture, cloud platforms, and full-stack enterprise systems.',
      'Maintaining strong practical execution across modern engineering stacks.',
    ],
  },
  {
    institution: 'MR/Rahula College',
    logo: '/education/rahula.png',
    logoAlt: 'Rahula College emblem',
    period: 'Mar 2021 - Jan 2024',
    qualification: 'G.C.E. Advanced Level (Physical Science Stream)',
    status: '',
    highlights: [
      'Developed core mathematical, problem-solving, and analytical foundations critical for computer science.',
      'Graduated with verified high academic standing.'
    ],
  },
  {
    institution: 'MR/Kongala Central College',
    logo: '/education/kongala.jpg',
    logoAlt: 'Kongala Central College emblem',
    period: 'Jan 2015 - Mar 2021',
    qualification: 'G.C.E. Ordinary Level',
    status: '7As [Inc. Maths & Science], 1B & 1C',
    highlights: [
      'Exhibited early excellence across core science and computational logic tracks.',
      'Active participant in extracurricular activities such as Music [Tabla Visharad], Sports.'],
  },
];
