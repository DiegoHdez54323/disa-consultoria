import type { SanityImageSource } from "@sanity/image-url";

export interface PortfolioCategory {
  id: string;
  title: string;
  slug?: string;
}

export interface PortfolioImage {
  source: SanityImageSource;
  alt: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image: PortfolioImage;
  color?: string;
  categories: PortfolioCategory[];
  gradient?: string;
  year: string;
  link?: string
}
