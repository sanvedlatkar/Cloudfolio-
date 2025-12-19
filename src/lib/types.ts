import type { LucideIcon } from 'lucide-react';
import type { StaticImageData } from 'next/image';

export type Skill = {
  name: string;
  icon: React.ElementType;
  level?: number;
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  shortDescription: string;
  technologies: string[];
  imageId: string; 
  live_url?: string;
  github_url?: string;
};
