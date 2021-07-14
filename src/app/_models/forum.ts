import {Comment} from "./comment";

export interface Forum {
    id: number;
    question: string;
    from: string;
    tags: string[];
    topics: string[];
    comments: Comment[];
    shares: number;
    saves: number;
    upVotes: number;
    downVotes: number;
    date: number;
}
