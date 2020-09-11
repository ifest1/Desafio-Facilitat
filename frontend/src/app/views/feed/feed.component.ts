import { Component, OnInit } from '@angular/core';
import { FeedService } from 'src/app/controllers/feed.service';
import { faEllipsisV, faThumbsUp, faShare, faComments } from '@fortawesome/free-solid-svg-icons'
import { POSTS } from './mock-posts';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss', '../shared.styles.scss']
})
export class FeedComponent implements OnInit {
  posts = POSTS;
  faEllipsisV = faEllipsisV;
  faThumbsUp = faThumbsUp;
  faShare = faShare;
  faComments = faComments;
  constructor(private feedService: FeedService) {
   }
  ngOnInit(): void {
    this.loadFeed();
  }

  loadFeed() {
    console.log(this.posts);
  }
}
