export class Feed {
  user:  User;
  posts: Post[];
}

export class Post {
  id:           number;
  user_id:      number;
  text:         string;
  created_at:   string;
  post_image:   string;
  user:         string;
  user_avatar:  string;
  likes:        Like[];
  liked:        boolean;
  likes_amount: number;
  comments:     Comment[];
}

export class Comment {
  id:          number;
  user_id:     number;
  post_id:     number;
  text:        string;
  like:        null;
  created_at:  string;
  name:        string;
  user_avatar: string;
}

export class Like {
  id:      number;
  post_id: number;
  user_id: number;
}

export class User {
  name:        string;
  avatar_path: string;
}
