import { Expert } from "./expert";
export interface BlueprintStatistics {
  rank: string;
  description: string;
}

export interface Company {
  id?: number;
  name: string;
  industry: string;
  date: number;
  location: string;
}

export interface Blueprint {
  blueprintOfTheMonth?: boolean;
  company: string;
  companyIndustry: string;
  companyYear: string;
  companyDescription: string[]
  description: string[];
  expertId: string;
  firstName: string;
  id?: number;
  industryId: string;
  interviewPodcast: string;
  interviewVideo: string;
  lastName: string;
  location: string;
  ocupation: string;
  pdfFile: string;
  photo: string;
  qA: any;
  quotes: string[];
  roleInCompany: string;
  stats: any;
  subtitle: string;
  timeline: any;
  title: string;
}

export interface ApplyBlueprint {
  fullName: string;
  email: string;
  phone: string;
  industryId: string;
  companyName: string;
  position: string;
  location: string;
  description: string;
}

export interface GetAllBlueprints {
  items: Blueprint[];
  page: number;
  size: number;
  total: number;
}

export interface Industry {
  id: number;
  name: string;
}

