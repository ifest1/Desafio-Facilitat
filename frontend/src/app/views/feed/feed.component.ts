import { Component, OnInit } from '@angular/core';
import { FeedService } from 'src/app/controllers/feed.service';
import { faEllipsisH, faThumbsUp, faShare, faComments } from '@fortawesome/free-solid-svg-icons'
import { Router } from '@angular/router';
import { UserService } from 'src/app/controllers/user.service';

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

  constructor(private feedService: FeedService, private userService: UserService, private router: Router) {
   }
  ngOnInit(): void {
    this.loadFeed();
  }

  loadFeed() {
    var token = localStorage.getItem('token');
    this.feedService.getPosts(token).subscribe((data: any) => {
      this.posts = data.posts;
      this.user = data.user;
      console.log(data);
      this.posts.forEach((post, index, posts) => {
        this.getUserData(post.user_id).subscribe((data: any) => {
          
          posts[index]['author'] = data.name;
          posts[index]['avatar_path'] = data.avatar_path;
        });

        post.comments.forEach((comment, index, comments)=> {
          this.getUserData(comment.user_id).subscribe((data: any) => {
            comments[index]['author'] = data.name;
            comments[index]['avatar_path'] = data.avatar_path;
          })
        });
      });
    });
  }

  getUserData(user_id) {
    return this.userService.getUser(user_id);
  }

  logout() {
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }
}
