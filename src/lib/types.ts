export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
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
