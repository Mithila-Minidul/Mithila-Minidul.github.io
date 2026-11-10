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
    institution: 'Education entry two',
    logo: '/education/rahula.png',
    logoAlt: 'Rahula College emblem',
    period: 'Add dates',
    qualification: 'Add your qualification or area of study',
    status: 'Add your status',
    highlights: ['Add a key achievement or detail.'],
  },
  {
    institution: 'Education entry three',
    logo: '/education/kongala.jpg',
    logoAlt: 'Kongala Central College emblem',
    period: 'Add dates',
    qualification: 'Add your qualification or area of study',
    status: 'Add your status',
    highlights: ['Add a key achievement or detail.'],
  },
];
