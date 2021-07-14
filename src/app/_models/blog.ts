import { UserComment } from "./user-comment";
import { Comment } from "./comment";

export interface Blog {
    id?: number;
    title: string;
    content: string;
    coverPhotoUrl: string;
    submitted: boolean;
    approved: boolean;
    industryId?: number;
    tags: string[];
    featured: boolean;
    createDate?: string;
}

export interface AllBlogs {
    items: Blog[];
    total: number;
    page: number;
    size: number;
}

