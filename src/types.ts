export interface PackageOption {
  id: string;
  num: string;
  name: string;
  price: string;
  description: string;
  featured?: boolean;
}

export interface BookingFormData {
  name: string;
  phone: string;
  date: string;
  guests: string;
  package: string;
  time: string;
  message: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  stars: number;
  quote: string;
  name: string;
  trip: string;
}
