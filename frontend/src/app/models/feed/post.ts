export class Post {
    id: number;
    author: string;
    avatar_path: string;
    message: string;
    image: string;
    date: string;
    likes: number;
    comments: [
        {
            author: string;
            avatar_path: string;
            comment: string;
            likes: number;
            date: string
        }
    ]
}