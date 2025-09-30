export interface Blog {
  id: number;
  slug: string;
  title:string;
  excerpt: string;
  imageUrl: string;
  author: string;
  date: string;
  content: string; // Can be markdown or HTML string
}