
export interface Project {
  id: string;
  title: string;
  summary: string;
  description: string;
  technologies: string[];
  media: MediaItem[];
  link?: string;
  github?: string;
  createdAt: Date;
}

export interface MediaItem {
  id: string;
  type: 'image' | 'video';
  url: string;
  thumbnail?: string;
  alt?: string;
}

export interface ContactInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  linkedin: string;
  photo: string;
  summary: string;
}
