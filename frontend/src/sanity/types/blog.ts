import type { SanityImageSource } from "@sanity/image-url";
import type { PortableTextBlock } from "@portabletext/types";

export interface BlogCategory {
  id: string;
  title: string;
  slug: string;
  description?: string;
}

export interface BlogAuthorAvatar {
  source: SanityImageSource | null;
  alt?: string;
}

export interface BlogAuthor {
  id: string;
  name: string;
  slug: string;
  role?: string;
  avatar?: BlogAuthorAvatar;
}

export interface BlogMainImage {
  source: SanityImageSource | null;
  alt: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  mainImage?: BlogMainImage;
  publishedAt: string;
  readTime?: number;
  featured?: boolean;
  author: BlogAuthor;
  categories: BlogCategory[];
  body: PortableTextBlock[];
}
