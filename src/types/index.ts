export interface Startup {
  name: string;
  slug: string;
  description: string;
  category: Category;
  image: string;
  logo?: string;
  url: string;
}

export type Category = "EXTINCTION DRIVERS" | "CLIMATE X BIODIVERSITY" | "ENABLING TECH";

export interface InterestArea {
  label: string;
  category: Category;
  backgroundImage: string;
  maskImage: string;
  areas: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface Mentor {
  name: string;
  title: string;
  organization: string;
  image: string;
}
