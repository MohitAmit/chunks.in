export interface ProductVariant {
  id: string;
  size: string;
  price: number;
}

export interface Ingredient {
  name: string;
  source: string;
  batchId: string;
  procurementDate: string;
  expiryDate: string;
}

export interface Report {
  name: string;
  url: string;
  date: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  images: string[];
  region: string;
  ingredients: Ingredient[];
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
  reports?: Report[];
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
