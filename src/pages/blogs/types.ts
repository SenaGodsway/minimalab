export interface Blog {
  id: string;
  title?: string; // <-- Add this line if your blogs have a title
  content: string; // ✅ markdown is just a string
  createdAt?: string;
  image_url?: string;
  tags?: string[];
}
