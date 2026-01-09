export interface Review {
  id: number;
  name: string;
  rating: number;
  text: string;
  title: string;
  image: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FeaturePoint {
  title: string;
  description: string;
}
