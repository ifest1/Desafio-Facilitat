import { Component, OnInit } from '@angular/core';
import { FeedService } from 'src/app/controllers/feed.service';
import { faEllipsisH, faThumbsUp, faShare, faComments } from '@fortawesome/free-solid-svg-icons'
import { POSTS } from './mock-posts';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss', '../shared.styles.scss']
})
export class FeedComponent implements OnInit {
  posts = POSTS;
  user = {
    name: "Iago",
    avatar_path: "https://picsum.photos/id/237/200/300"
  }
  faEllipsisH = faEllipsisH;
  faThumbsUp = faThumbsUp;
  faShare = faShare;
  faComments = faComments;

  constructor(private feedService: FeedService) {
   }
  ngOnInit(): void {
    this.loadFeed();
    this.getUserData();
  }

  loadFeed() {
    console.log(this.posts);
  }

  getUserData() {
    console.log(this.user);
  }
}
