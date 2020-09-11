import { Post } from '../../models/feed/post';
export const POSTS: Post[] = [
    {
    id: 0,
    author: 'José David',
    avatar_path: 'https://picsum.photos/id/237/200/300',
    message: 'Rapaziada to fazendo coco ',
    image: 'https://picsum.photos/seed/picsum/200/300',
    date: '27/08/2010',
    likes: 3,
    comments: [
        {
            author: 'João',
            avatar_path: 'https://picsum.photos/seed/picsum/200/300',
            comment: 'Me conta uma novidade hahaha!',
            likes: 2,
            date: '28/08/2010'
        }
      ]
    },
    {
      id: 1,
      author: 'João',
      avatar_path: 'https://picsum.photos/id/238/200/300',
      message: 'Rapaziada to fazendo xixi',
      image: 'https://picsum.photos/seed/picsum/200/300',
      date: '27/08/2010',
      likes: 3,
      comments: [
          {
              author: 'José',
              avatar_path: 'https://picsum.photos/seed/picsum/200/300',
              comment: 'Me conta uma novidade hahaha!',
              likes: 2,
              date: '28/08/2010'
          }
        ]
      }
  ]