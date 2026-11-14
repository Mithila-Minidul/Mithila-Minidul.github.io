export interface Project {
  title: string;
  summary: string;
  tags: string[];
  repositoryUrl?: string;
  showStackIcons?: boolean;
  details?: {
    overview: string;
    highlights: { title: string; text: string }[];
  };
  previews?: { src: string; alt: string }[];
}

export const projects: Project[] = [
  {
    title: 'BoardMate',
    summary: 'A location-aware housing marketplace for students and boarding owners.',
    tags: ['React Native', 'Expo', 'Node.js', 'Express', 'MongoDB', 'Socket.io'],
    repositoryUrl: '',
    previews: [
      { src: '/projects/boardmate/01-discover.svg', alt: 'BoardMate mock preview: discover nearby boarding options' },
      { src: '/projects/boardmate/02-map.svg', alt: 'BoardMate mock preview: browse listings on a map' },
      { src: '/projects/boardmate/03-listing.svg', alt: 'BoardMate mock preview: review a boarding listing' },
      { src: '/projects/boardmate/04-messages.svg', alt: 'BoardMate mock preview: chat with a property owner' },
    ],
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
    title: 'TripCraft',
    summary: 'AI-integrated Travel Planning & Itinerary Platform',
    tags: ['React', 'Python', 'Flutter', '.NET', 'PostgreSQL'],
    repositoryUrl: 'https://github.com/Mithila-Minidul/Travel-Planning-Itinerary-Platform',
    showStackIcons: true,
    previews: [
      { src: '/projects/tripcraft/01-home.png', alt: 'Project tripcraft preview: Landing Page' },
      { src: '/projects/tripcraft/02-register.png', alt: 'Project tripcraft  preview: Register Page' },
      { src: '/projects/tripcraft/03-login.png', alt: 'Project tripcraft  preview: Login Page' },
      { src: '/projects/tripcraft/04-admin1.png', alt: 'Project tripcraft  preview: Admin Dashboard - 1' },
      { src: '/projects/tripcraft/03-admin2.png', alt: 'Project tripcraft  preview: Admin Dashboard - 2' },
      { src: '/projects/tripcraft/04-admin2.png', alt: 'Project tripcraft  preview: Admin AI Experince Manage Page' },
      { src: '/projects/tripcraft/05-admin3.png', alt: 'Project tripcraft  preview: Admin AI Performance Page ' },
      { src: '/projects/tripcraft/06-TravelAgent1.png', alt: 'Project tripcraft  preview: Travel Agent Dashboard ' },
      { src: '/projects/tripcraft/07-TripForTravelAgent2.png', alt: 'Project tripcraft  preview: Travel Agent AI generated trip Page - 1 ' },
      { src: '/projects/tripcraft/08-TripForTravelAgent3.png', alt: 'Project tripcraft  preview: Travel Agent AI generated trip Page - 2  ' },
      { src: '/projects/tripcraft/09-TripForTravelAgent4.png', alt: 'Project tripcraft  preview: Travel Agent AI Execution log Page' },
      { src: '/projects/tripcraft/10-Guide1.png', alt: 'Project tripcraft  preview: Local Guide Dashboard' },
      { src: '/projects/tripcraft/11-Guide2.png', alt: 'Project tripcraft  preview: Local Guide Experience Page' },
      { src: '/projects/tripcraft/12-Guide3.png', alt: 'Project tripcraft  preview: Local Guide Reviews & Rating Page' },
      { src: '/projects/tripcraft/13-mobile1.png', alt: 'Project tripcraft  preview: Mobile login Page' },
      { src: '/projects/tripcraft/14-mobile2.png', alt: 'Project tripcraft  preview: Mobile register Page' },
      { src: '/projects/tripcraft/15-mobile3.png', alt: 'Project tripcraft  preview: Mobile Dashboard' },
      { src: '/projects/tripcraft/16-mobile4.png', alt: 'Project tripcraft  preview: Mobile Experience Browsing Page' },
      { src: '/projects/tripcraft/17-mobile5.png', alt: 'Project tripcraft  preview: Mobile Trip Creating' },
      { src: '/projects/tripcraft/18-mobile6.png', alt: 'Project tripcraft  preview: Mobile Payhere Payment Page' },
      { src: '/projects/tripcraft/19-mobile7.png', alt: 'Project tripcraft  preview: Mobile QR Confirmation Page' },

    ],
    details: {
      overview:
        'TripCraft is a multi-client travel planning and itinerary platform that combines a React/Vite web app, Flutter mobile app, ASP.NET Core REST API, PostgreSQL database, and a Python/FastAPI Agentic AI service. It helps travelers discover destinations and experiences, build budget-aware itineraries, book services, and coordinate local guides, while Travel Agents retain final human oversight of AI-generated plans.',
      highlights: [
        {
          title: 'Multi-Agent AI Itinerary Engine',
          text: 'Specialized Planner → Research → Deterministic Filtering → Budget → Approval agents coordinated by FastAPI + LangChain + Google Gemini. Critical constraints (budget, capacity, time, pacing, guide consistency) are enforced in code, not left to the LLM.',
        },
        {
          title: 'Human-in-the-Loop Control',
          text: 'Every AI-generated itinerary stays in a pending state until a Travel Agent reviews and approves it. AI never becomes the final operational authority.',
        },
        {
          title: 'Full-Stack Role-Based Platform',
          text: 'React/Vite web app for Admin, Travel Agent & Local Guide + Flutter mobile app for Travelers, all powered by a single ASP.NET Core API and PostgreSQL.',
        },
        {
          title: 'Complete Travel Operations',
          text: 'End-to-end management of Destinations, Experiences, Local Guides, Trips, Bookings, Payments (PayHere), Reviews, and user roles with proper authorization.',
        },
        {
          title: 'AI Observability & Audit Trail',
          text: 'Every AI run is persisted as AgentWorkflow + ordered AgentExecutionLog records so the full planning sequence, timing, and decisions can be inspected and debugged.',
        },
        {
          title: 'Modular & Independently Deployable',
          text: 'React (Vercel), .NET API + FastAPI AI service (Railway), PostgreSQL (Supabase), Cloudinary media — each component can scale and evolve separately.',
        },
            ],
          },
        },
  /*{
    title: 'Project three',
    summary: 'Add a concise summary of the project and its impact.',
    tags: ['Your', 'Stack'],
    previews: [
      { src: '/projects/project-three/01-overview.svg', alt: 'Project three mock preview: overview' },
      { src: '/projects/project-three/02-workspace.svg', alt: 'Project three mock preview: workspace' },
      { src: '/projects/project-three/03-insights.svg', alt: 'Project three mock preview: insights view' },
      { src: '/projects/project-three/04-settings.svg', alt: 'Project three mock preview: settings view' },
    ],
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
    previews: [
      { src: '/projects/project-four/01-overview.svg', alt: 'Project four mock preview: overview' },
      { src: '/projects/project-four/02-architecture.svg', alt: 'Project four mock preview: architecture view' },
      { src: '/projects/project-four/03-metrics.svg', alt: 'Project four mock preview: metrics view' },
      { src: '/projects/project-four/04-release.svg', alt: 'Project four mock preview: release view' },
    ],
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
  }, */
];