export interface Blog {
  id: string;
  /**
   * Optional legacy/SEO identifier stored in the Firestore document body.
   * Note: this is different from the Firestore document id (`id` above).
   */
  slug?: string;
  title?: string; // <-- Add this line if your blogs have a title
  content: string; // ✅ markdown is just a string
  createdAt?: string;
  image_url?: string;
  tags?: string[];
  author?: string;
  short_description?: string;
}

export interface PostCreateAccount {
  id?: string;
  username: string;
  password: string;
  role: string;
  name: string;
}
