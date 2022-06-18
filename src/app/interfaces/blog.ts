export interface Blog {
  id: number;
  title: string;
  link: string;
  keywords?: string[] | null;
  creator?: string[] | null;
  description?: string | null;
  full_description?: string | null;
  pubDate: string;
  image_url?: string | null;
  country: string[];
  category: string[];
  language: string;
}
