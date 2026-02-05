import { MediaType, SkillCategory, Song, MediaItem, Thought, Skill, Project } from './types';

export const INITIAL_SONGS: Song[] = [
  {
    id: '1',
    title: 'Midnight City',
    artist: 'M83',
    albumArt: 'https://picsum.photos/200/200?random=1',
    playedAt: new Date().toISOString(),
    status: 'playing'
  },
  {
    id: '2',
    title: 'Instant Crush',
    artist: 'Daft Punk',
    albumArt: 'https://picsum.photos/200/200?random=2',
    playedAt: new Date(Date.now() - 3600000).toISOString(),
    status: 'history'
  },
  {
    id: '3',
    title: 'The Less I Know The Better',
    artist: 'Tame Impala',
    albumArt: 'https://picsum.photos/200/200?random=3',
    playedAt: new Date(Date.now() - 7200000).toISOString(),
    status: 'history'
  }
];

export const INITIAL_MEDIA: MediaItem[] = [
  {
    id: '1',
    title: 'Inception',
    type: MediaType.MOVIE,
    rating: 5,
    review: 'A masterclass in visual storytelling. Nolan at his peak.',
    poster: 'https://picsum.photos/300/450?random=4',
    watchedAt: new Date().toISOString()
  },
  {
    id: '2',
    title: 'Silicon Valley',
    type: MediaType.SERIES,
    rating: 4.5,
    review: 'Hilarious and painfully accurate representation of tech culture.',
    poster: 'https://picsum.photos/300/450?random=5',
    watchedAt: new Date(Date.now() - 86400000 * 2).toISOString()
  },
  {
    id: '3',
    title: 'Severance',
    type: MediaType.SERIES,
    rating: 5,
    review: 'Mind-bending thriller. Can\'t wait for season 2.',
    poster: 'https://picsum.photos/300/450?random=6',
    watchedAt: new Date(Date.now() - 86400000 * 5).toISOString()
  }
];

export const INITIAL_THOUGHTS: Thought[] = [
  {
    id: '1',
    content: 'Just discovered the power of React Server Components. It completely changes how we think about data fetching boundaries.',
    timestamp: new Date().toISOString(),
    tags: ['Tech', 'React', 'WebDev']
  },
  {
    id: '2',
    content: 'Good design is as little design as possible. Minimalism isn\'t just an aesthetic, it\'s a functional requirement for clarity.',
    timestamp: new Date(Date.now() - 86400000).toISOString(),
    tags: ['Design', 'Philosophy']
  },
  {
    id: '3',
    content: 'Learning Rust has been a humbling experience. The borrow checker is strict but fair.',
    timestamp: new Date(Date.now() - 86400000 * 3).toISOString(),
    tags: ['Rust', 'Learning']
  },
  {
    id: '4',
    content: 'Music is the strongest form of magic.',
    timestamp: new Date(Date.now() - 86400000 * 5).toISOString(),
    tags: ['Life', 'Music']
  }
];

export const SKILLS: Skill[] = [
  { name: 'React', level: 95, category: SkillCategory.FRONTEND },
  { name: 'TypeScript', level: 90, category: SkillCategory.FRONTEND },
  { name: 'Node.js', level: 85, category: SkillCategory.BACKEND },
  { name: 'Python', level: 80, category: SkillCategory.BACKEND },
  { name: 'UI/UX', level: 75, category: SkillCategory.DESIGN },
  { name: 'DevOps', level: 60, category: SkillCategory.TOOLS },
];

export const INITIAL_PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Neon Commerce',
    description: 'A headless e-commerce storefront built for speed and conversion. Features real-time inventory and AI-powered recommendations.',
    technologies: ['Next.js', 'Stripe', 'Tailwind', 'Redis'],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com',
    imageUrl: 'https://picsum.photos/600/400?random=10'
  },
  {
    id: '2',
    title: 'TaskFlow Pro',
    description: 'Project management tool designed for remote teams. Includes kanban boards, time tracking, and automated reporting.',
    technologies: ['React', 'Firebase', 'TypeScript', 'Framer Motion'],
    githubLink: 'https://github.com',
    imageUrl: 'https://picsum.photos/600/400?random=11'
  },
  {
    id: '3',
    title: 'CryptoWatch',
    description: 'Real-time cryptocurrency tracker with price alerts and portfolio management visualization.',
    technologies: ['Vue.js', 'D3.js', 'Node.js', 'WebSockets'],
    liveLink: 'https://example.com',
    imageUrl: 'https://picsum.photos/600/400?random=12'
  }
];

export const FOOTER_QUOTES = [
  "Code is like humor. When you have to explain it, it’s bad.",
  "Simplicity is the soul of efficiency.",
  "Make it work, make it right, make it fast.",
  "Of course it works on my machine.",
  "Talk is cheap. Show me the code.",
  "First, solve the problem. Then, write the code.",
  "Experience is the name everyone gives to their mistakes.",
  "Java is to JavaScript what car is to Carpet."
];