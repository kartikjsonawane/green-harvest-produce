export interface Product {
  id: string;
  name: string;
  slug: string;
  category: "fruit" | "vegetable";
  description: string;
  image: string;
  season: string;
  minOrderQty: string;
  packagingOptions: string[];
  availability: "available" | "seasonal" | "pre-order";
  priceRange: string;
  origin: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  authorAvatar: string;
  category: string;
  tags: string[];
  publishedAt: string;
  readTime: number;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  role: string;
  avatar: string;
  rating: number;
  content: string;
}

export interface Partner {
  id: string;
  name: string;
  logo: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: "farm" | "warehouse" | "product" | "delivery" | "team";
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
  bio: string;
}

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export interface Inquiry {
  id: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  product: string;
  quantity: string;
  message: string;
  status: "new" | "in-progress" | "resolved";
  createdAt: string;
}

export interface Stat {
  label: string;
  value: number;
  suffix: string;
  icon: string;
}
