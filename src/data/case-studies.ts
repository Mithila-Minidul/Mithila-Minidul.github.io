export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  overview: string;
  highlights: { title: string; text: string }[];
  stack: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'boardmate',
    title: 'BoardMate',
    subtitle: 'A location-aware accommodation engine',
    overview:
      'BoardMate is a full-stack mobile marketplace that connects people looking for housing with boarding owners publishing localized properties. Discovery is interactive and geographic, so students can find places near where they need to be.',
    highlights: [
      {
        title: 'Property lifecycle',
        text: 'An Express and Node.js backend with a modular Expo client manages the whole lifecycle of a listing. Owners detail occupancy, target tenants and pricing models.',
      },
      {
        title: 'Location-based search',
        text: 'Geospatial search and proximity discovery let people explore boarding houses on a map and find what is close.',
      },
      {
        title: 'Real-time chat',
        text: 'Socket.io powers bidirectional chat, so students and owners can talk directly inside the app.',
      },
      {
        title: 'Verified accounts',
        text: 'SMS OTP verification through the Text.lk gateway helps confirm real users.',
      },
      {
        title: 'Image handling',
        text: 'Cloudinary handles image processing and storage, so property photos load quickly.',
      },
    ],
    stack: ['React Native', 'Expo', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'Tailwind CSS'],
  },
];