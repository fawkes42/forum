import { Author } from "./Author";

export interface IComment {
    id: number;
    author: Author;
    publishedAt: Date;
    content: string;
}