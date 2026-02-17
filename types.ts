export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  imageUrl: string;
  readTime: string;
  type?: 'article' | 'music' | 'course';
}
