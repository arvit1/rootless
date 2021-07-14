import { Entity } from "./entity";

export interface Statistics {
  responseRate: string;
  followers: string;
  calls: string;
  questions: string;
  hostedEvents: string;
  marketSize: string;
}

// export interface Course extends Entity {
//   popular: boolean;
//   statistics?: Statistics;
// }

export interface Course {
  id: number;
  expertId: number;
  title: string;
  description: string;
  topics: string[];
  learnings: string;
  time: string;
  industry_id: string;
  popular: boolean;
  schedule: string;
  address: string;
  delete_date: Date;
  create_date: Date;
  update_date: Date;
  enrollment_id: number;
  watched: boolean;
  videoFilePath: string;
}

export interface AllCourses {
  items: Course[];
  total: number;
  page: number;
  size: number;
}


