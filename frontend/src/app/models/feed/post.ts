interface Success {
    user: {
      name: string;
      avatar: string;
    }
    posts: {
      id: number,
      user_id: number,
      text: string;
      image: string;
      like: number;
      created_at: string;
      comments: [
        {
          id: number,
          user_id: number,
          post_id: number,
          text: string;
          like: number;
          created_at: string;
        }
      ]
    }
  }
  
  interface Failure {
    status: string;
  }
  
  export type PostResponse = Success | Failure;