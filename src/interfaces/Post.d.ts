export interface IPost {
    id: number;
    author: Author;
    publishedAt: Date;
    content: {
        type: 'paragraph' | 'link';
        text: string;
    }[];
}