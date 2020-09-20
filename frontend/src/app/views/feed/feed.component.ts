import { Component, OnInit } from '@angular/core';
import { FeedService } from 'src/app/controllers/feed.service';
import { faEllipsisH, faThumbsUp, faShare, faComments, faCamera } from '@fortawesome/free-solid-svg-icons'
import { Router } from '@angular/router';
import { UserService } from 'src/app/controllers/user.service';
import { LikeService } from 'src/app/controllers/like.service';
import { CommentService } from 'src/app/controllers/comment.service';
import { PostService } from 'src/app/controllers/post.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss', '../shared.styles.scss']
})
export class FeedComponent implements OnInit {
  posts; user;
  postText: string;

  //icones
  faEllipsisH = faEllipsisH;
  faThumbsUp = faThumbsUp;
  faShare = faShare;
  faComments = faComments;
  faCamera = faCamera;

  //token de autenticação
  private token;

  //controllers
  constructor(
    private feedService: FeedService, 
    private userService: UserService, 
    private likeService: LikeService,
    private commentsService: CommentService,
    private postService: PostService,
    private router: Router) {
   }

  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    if (!this.token) this.redirectToLogin();
    this.loadFeed();
  }

  redirectToLogin() {
    this.router.navigateByUrl('/');
  }

  loadFeed() {
    this.feedService.getPosts(this.token).subscribe((data: any) => {
      this.posts = data.posts;
      this.user = data.user;
      this.countLikes();
      this.getAvatars();
      this.setLikes();
    });
  }

  //funções de interação com o usuário
  post() {
    this.postService.post(this.token, this.postText).subscribe(() => {
      this.loadFeed();
      this.postText ='';
    })
  }

  like(postId) {
    this.likeService.postLike(this.token, postId).subscribe(() => {
      this.updatePostData(postId);
    });
  }


  comment(input, postId) {
    if (!input.value) return;
    this.commentsService.postComment(this.token, postId, input.value).subscribe(data =>{
      this.updatePostData(postId);
    });
    input.value = '';
  }

  logout() {
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }


  //funções de atualização/inicialização do state da página


  getUserData(userId) {
    return this.userService.getUser(userId);
  }

  getAvatars() {
    this.posts.forEach((post, i, posts) => {
      post.comments.forEach((comment, j, comments)=> {
        this.getUserData(comment.user_id).subscribe((data: any) => {
          posts[i].comments[j]["avatar_path"] = data.avatar_path;
          posts[i].comments[j]["name"] = data.name; 
        })
      });
    });
  }

  
  countLikes() {
    this.posts.forEach((post, index, posts) => {
      posts[index]['likes_amount'] = post.likes.length
    });
  }

  setLikes() {
    this.posts.forEach((post, i, posts) => {
      posts[i]['liked'] = false;

      post.likes.map(like => {
        if(like.user_id == this.user.id) {
          posts[i]['liked'] = true;
        }
      })
    });
    this.countLikes();
  }

  updatePostData(postId) {
    this.likeService.getLikes(this.token, postId).subscribe((data: any) => {
      this.posts[postId - 1]['likes'] = data;
      this.setLikes();
    })
    
    this.commentsService.getComments(this.token, postId).subscribe((data: any) => {
      this.posts[postId - 1]['comments'] = data;
    })
  }
}
