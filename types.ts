export enum MediaType {
  MOVIE = 'MOVIE',
  SERIES = 'SERIES',
  DOCUMENTARY = 'DOCUMENTARY'
}

export enum SkillCategory {
  FRONTEND = 'Frontend',
  BACKEND = 'Backend',
  DESIGN = 'Design',
  TOOLS = 'Tools'
}

export interface Song {
  id: string;
  title: string;
  artist: string;
  albumArt: string;
  playedAt: string; // ISO date string
  status: 'playing' | 'history';
}

export interface MediaItem {
  id: string;
  title: string;
  type: MediaType;
  rating: number; // 0-5
  review?: string;
  poster: string;
  watchedAt: string;
}

export interface Thought {
  id: string;
  content: string;
  timestamp: string;
  tags: string[];
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: SkillCategory;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  liveLink?: string;
  githubLink?: string;
  imageUrl: string;
}