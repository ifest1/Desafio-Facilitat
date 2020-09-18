import { Component, OnInit } from '@angular/core';
import { FeedService } from 'src/app/controllers/feed.service';
import { faEllipsisH, faThumbsUp, faShare, faComments, faCamera } from '@fortawesome/free-solid-svg-icons'
import { Router } from '@angular/router';
import { UserService } from 'src/app/controllers/user.service';
import { LikeService } from 'src/app/controllers/like.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss', '../shared.styles.scss']
})
export class FeedComponent implements OnInit {
  posts;
  user;
  faEllipsisH = faEllipsisH;
  faThumbsUp = faThumbsUp;
  faShare = faShare;
  faComments = faComments;
  faCamera = faCamera;

  private token;

  constructor(
    private feedService: FeedService, 
    private userService: UserService, 
    private likeService: LikeService,
    private router: Router) {
   }

  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    this.loadFeed();
  }

  loadFeed() {
    this.feedService.getPosts(this.token).subscribe((data: any) => {
      this.posts = data.posts;
      this.user = data.user;
      this.countLikes();
      this.getUsersAvatars();
      console.log(this.posts);
    });
  }

  getUserData(userId) {
    return this.userService.getUser(userId);
  }

  countLikes() {
    this.posts.forEach((post, index, posts) => {
      posts[index]['likes_amount'] = post.likes.length
    });
  }

  getUsersAvatars() {
    this.posts.forEach((post, i, posts) => {
      post.comments.forEach((comment, j, comments)=> {
        this.getUserData(comment.user_id).subscribe((data: any) => {
          posts[i].comments[j]["avatar_path"] = data.avatar_path;
          posts[i].comments[j]["author"] = data.name; 
        })
      });
    });
  }

  like(postId) {
    return this.likeService.postLike(this.token, postId);
  }

  logout() {
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }
}
