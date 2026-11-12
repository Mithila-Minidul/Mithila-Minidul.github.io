export interface Project {
  title: string;
  summary: string;
  tags: string[];
  details?: {
    overview: string;
    highlights: { title: string; text: string }[];
  };
  preview?: { src: string; alt: string };
}

export const projects: Project[] = [
  {
    title: 'BoardMate',
    summary: 'A location-aware housing marketplace for students and boarding owners.',
    tags: ['React Native', 'Expo', 'Node.js', 'Express', 'MongoDB', 'Socket.io'],
    details: {
      overview:
        'BoardMate connects people looking for housing with boarding owners publishing localized properties. Students can discover places close to where they need to be.',
      highlights: [
        {
          title: 'Property lifecycle',
          text: 'An Express and Node.js backend with a modular Expo client manages listings, occupancy, target tenants, and pricing.',
        },
        {
          title: 'Location-based search',
          text: 'Geospatial search and proximity discovery help students find boarding houses near their preferred locations.',
        },
        {
          title: 'Real-time chat',
          text: 'Socket.io powers direct conversations between students and owners inside the app.',
        },
        {
          title: 'Verified accounts',
          text: 'SMS OTP verification through the Text.lk gateway helps confirm real users.',
        },
        {
          title: 'Image handling',
          text: 'Cloudinary processes and stores property photos for fast delivery.',
        },
      ],
    },
  },
  {
    title: 'Project two',
    summary: 'Add a concise project summary, the problem it solves, and the result.',
    tags: ['Your', 'Stack'],
    details: {
      overview:
        'Mock content for testing this expanded panel. Replace it with the real project context, your approach, and the outcome before publishing.',
      highlights: [
        {
          title: 'Problem framing',
          text: 'Describe the user need or workflow this project was designed to improve.',
        },
        {
          title: 'Solution design',
          text: 'Summarize the key product or architecture decisions you made.',
        },
        {
          title: 'Implementation',
          text: 'Highlight an important feature and the technologies used to build it.',
        },
      ],
    },
  },
  {
    title: 'Project three',
    summary: 'Add a concise summary of the project and its impact.',
    tags: ['Your', 'Stack'],
    details: {
      overview:
        'Short mock content for checking how a compact detail panel expands beneath its card.',
      highlights: [
        {
          title: 'Main feature',
          text: 'Replace this sample with the most useful capability of the real project.',
        },
        {
          title: 'Outcome',
          text: 'Add the result, impact, or lesson you want visitors to remember.',
        },
      ],
    },
  },
  {
    title: 'Project four',
    summary: 'Replace with your next project, or remove this card and the grid will adapt.',
    tags: ['Your', 'Stack'],
    details: {
      overview:
        'Longer mock content for testing a featured card with a larger set of project details. Replace this sample with a clear explanation of the problem, your role, the solution, and the result.',
      highlights: [
        {
          title: 'User experience',
          text: 'Explain how the interface supports the primary task and makes the experience easier to understand.',
        },
        {
          title: 'System design',
          text: 'Describe the structure of the application and how its main parts communicate.',
        },
        {
          title: 'Technical challenge',
          text: 'Share a complex implementation detail and how you approached it.',
        },
        {
          title: 'Result',
          text: 'Replace with a measurable outcome, user benefit, or meaningful learning.',
        },
      ],
    },
  },
];