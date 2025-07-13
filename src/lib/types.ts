export interface ProductVariant {
  id: string;
  size: string;
  price: number;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  images: string[];
  region: string;
  ingredients: string[];
  farmerStory: {
    name: string;
    story: string;
    video: string;
    photo: string;
  };
  healthBenefits: string[];
  certifications?: string[];
  variants: ProductVariant[];
  dataAiHint?: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  avatar: string;
  text: string;
  rating: number;
}

export interface CartItem extends Product {
  quantity: number;
  variant: ProductVariant;
}
