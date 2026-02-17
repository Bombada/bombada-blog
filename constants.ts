import { BlogPost } from './types';

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of Digital Typography',
    excerpt: 'Exploring how variable fonts and 3D motion graphics are reshaping the way we consume text on the web.',
    category: 'Design',
    author: 'Alex Morgan',
    date: 'Oct 12, 2023',
    imageUrl: 'https://picsum.photos/800/600?random=1',
    readTime: '5 min read',
    type: 'article'
  },
  {
    id: '2',
    title: 'Minimalism in the Age of VR',
    excerpt: 'Can traditional minimal design principles survive in immersive virtual reality environments?',
    category: 'Technology',
    author: 'Sarah Chen',
    date: 'Oct 08, 2023',
    imageUrl: 'https://picsum.photos/800/600?random=2',
    readTime: '8 min read',
    type: 'article'
  },
  {
    id: '3',
    title: 'Understanding React Server Components',
    excerpt: 'A deep dive into the architecture of RSC and how it optimizes data fetching and bundle sizes.',
    category: 'Development',
    author: 'Mike Ross',
    date: 'Sep 29, 2023',
    imageUrl: 'https://picsum.photos/800/600?random=3',
    readTime: '12 min read',
    type: 'article'
  },
  {
    id: '4',
    title: 'Color Theory for Dark Mode',
    excerpt: 'Why pure black is rarely the answer and how to create soothing dark palettes.',
    category: 'UI/UX',
    author: 'Jessica Wu',
    date: 'Sep 15, 2023',
    imageUrl: 'https://picsum.photos/800/600?random=4',
    readTime: '6 min read',
    type: 'article'
  },
  {
    id: '5',
    title: 'The Psychology of Micro-interactions',
    excerpt: 'How small animations trigger chemical releases in the brain and build product habit.',
    category: 'Psychology',
    author: 'Tom Baker',
    date: 'Sep 10, 2023',
    imageUrl: 'https://picsum.photos/800/600?random=5',
    readTime: '4 min read',
    type: 'article'
  },
  {
    id: '6',
    title: 'CSS Grid vs Flexbox: The Final Showdown',
    excerpt: 'Knowing exactly when to use which layout model for modern responsive web design.',
    category: 'Development',
    author: 'Emma Davis',
    date: 'Sep 05, 2023',
    imageUrl: 'https://picsum.photos/800/600?random=6',
    readTime: '7 min read',
    type: 'article'
  }
];

export const MUSIC_POSTS: BlogPost[] = [
  {
    id: 'm1',
    title: 'Ethereal Soundscapes',
    excerpt: 'Ambient textures and floating melodies for deep focus and relaxation.',
    category: 'Ambient',
    author: 'Lunar Echo',
    date: '2023',
    imageUrl: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=800&auto=format&fit=crop',
    readTime: '45:00',
    type: 'music'
  },
  {
    id: 'm2',
    title: 'Cyberpunk Rhythms',
    excerpt: 'High-energy beats and distorted bass lines from the underground city.',
    category: 'Electronic',
    author: 'Glitch Protocol',
    date: '2023',
    imageUrl: 'https://images.unsplash.com/photo-1514525253440-b393452e8d26?q=80&w=800&auto=format&fit=crop',
    readTime: '03:45',
    type: 'music'
  },
  {
    id: 'm3',
    title: 'Lo-Fi Study Beats',
    excerpt: 'Chill hip-hop beats to help you concentrate on your coding sessions.',
    category: 'Lo-Fi',
    author: 'Coffee & Code',
    date: '2023',
    imageUrl: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=800&auto=format&fit=crop',
    readTime: '1:00:00',
    type: 'music'
  },
  {
    id: 'm4',
    title: 'Jazz Noir Collection',
    excerpt: 'Smoky saxophone solos and rainy night vibes for the quiet hours.',
    category: 'Jazz',
    author: 'The Blue Note',
    date: '2023',
    imageUrl: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=800&auto=format&fit=crop',
    readTime: '42:15',
    type: 'music'
  },
  {
    id: 'm5',
    title: 'Modern Classical',
    excerpt: 'Contemporary piano compositions that stir the soul and clear the mind.',
    category: 'Classical',
    author: 'Elena V.',
    date: '2023',
    imageUrl: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?q=80&w=800&auto=format&fit=crop',
    readTime: '05:12',
    type: 'music'
  },
  {
    id: 'm6',
    title: 'Deep House Sessions',
    excerpt: 'Groovy basslines and soulful vocals for the late night club atmosphere.',
    category: 'House',
    author: 'DJ Mirage',
    date: '2023',
    imageUrl: 'https://images.unsplash.com/photo-1571266028243-371695039989?q=80&w=800&auto=format&fit=crop',
    readTime: '1:20:00',
    type: 'music'
  }
];

export const DEV_COURSES: BlogPost[] = [
  {
    id: 'c1',
    title: 'Advanced React Patterns',
    excerpt: 'Master compound components, control props, and custom hooks for scalable UI libraries.',
    category: 'Advanced',
    author: 'Dan A.',
    date: 'Updated Sep 2023',
    imageUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop',
    readTime: '4h 15m',
    type: 'course'
  },
  {
    id: 'c2',
    title: 'Three.js & WebGL Mastery',
    excerpt: 'Build immersive 3D experiences from scratch using Three.js and GLSL shaders.',
    category: 'WebGL',
    author: 'Bruno S.',
    date: 'Released Aug 2023',
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop',
    readTime: '12h 30m',
    type: 'course'
  },
  {
    id: 'c3',
    title: 'Next.js 14: The Full Guide',
    excerpt: 'Server Actions, App Router, and streaming. Build a full-stack app with the latest features.',
    category: 'Fullstack',
    author: 'Lee R.',
    date: 'Updated Oct 2023',
    imageUrl: 'https://images.unsplash.com/photo-1618477247222-ac591245363d?q=80&w=800&auto=format&fit=crop',
    readTime: '8h 45m',
    type: 'course'
  },
  {
    id: 'c4',
    title: 'CSS Animation for Interactivity',
    excerpt: 'Create buttery smooth 60fps animations and micro-interactions with pure CSS.',
    category: 'Frontend',
    author: 'Adam A.',
    date: 'Released Jul 2023',
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop',
    readTime: '3h 20m',
    type: 'course'
  },
  {
    id: 'c5',
    title: 'TypeScript for Large Scale Apps',
    excerpt: 'Generics, utility types, and strict mode. Bulletproof your codebase.',
    category: 'Language',
    author: 'Matt P.',
    date: 'Updated Sep 2023',
    imageUrl: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=800&auto=format&fit=crop',
    readTime: '5h 10m',
    type: 'course'
  },
  {
    id: 'c6',
    title: 'Node.js Microservices',
    excerpt: 'Designing scalable backend architectures with Node, Docker, and Kubernetes.',
    category: 'Backend',
    author: 'Ryan D.',
    date: 'Released Jun 2023',
    imageUrl: 'https://images.unsplash.com/photo-1605745341112-85968b19335b?q=80&w=800&auto=format&fit=crop',
    readTime: '15h 00m',
    type: 'course'
  }
];
