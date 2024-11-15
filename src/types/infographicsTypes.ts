import { ReactNode } from "react";

export interface Images {
  src: string;
  alt: string;
  description: string;
}

export interface Slide {
  id?: number;
  title: string;
  previewImage: string;
  imageContent: Images[];
  content: () => ReactNode
}