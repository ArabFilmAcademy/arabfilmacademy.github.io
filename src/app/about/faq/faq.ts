export interface Faq {
  id: number;
  question: string;
  answer: string;
  links: { title: string; link?: string; routerLink?: string }[];
}
