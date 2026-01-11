export interface Blog {
  id: string;
  /**
   * Optional legacy/SEO identifier stored in the Firestore document body.
   * Note: this is different from the Firestore document id (`id` above).
   */
  slug?: string;
  title?: string; 
  content: string;
  createdAt?: string;
  createdAtTimestamp?: number; // Timestamp in milliseconds for sorting
  image_url?: string;
  tags?: string[];
  author?: string;
  short_description?: string;
  view_count?: number;
  clap_count?: number;
}

export interface PostCreateAccount {
  id?: string;
  username: string;
  password: string;
  role: string;
  name: string;
}
