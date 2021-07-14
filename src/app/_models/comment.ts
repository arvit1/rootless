import {UserComment} from "./user-comment";

export interface Comment {
  id: number;
  text: string;
  author: UserComment;
  date: number;
  comments?: Comment[];
}
