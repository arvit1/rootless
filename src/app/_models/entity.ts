import {Expert} from "./expert";

// SingleCourse and Event common fields
export interface Entity {
  id?: number;
  imgUrl: string;
  imgTitle: string;
  description: string;
  title: string;
  fee: number;
  tags: string[];
  from: Expert[];
  date: number;
  dates?: number[];
}
