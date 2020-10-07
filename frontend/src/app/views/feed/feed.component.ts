import { Component, OnInit } from '@angular/core';
import { FeedService } from 'src/app/controllers/feed.service';
import { faEllipsisH, faThumbsUp, faShare, faComments, faCamera } from '@fortawesome/free-solid-svg-icons'
import { Router } from '@angular/router';
import { LikeService } from 'src/app/controllers/like.service';
import { CommentService } from 'src/app/controllers/comment.service';
import { PostService } from 'src/app/controllers/post.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Feed } from '../../models/feed/post';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss', '../shared.styles.scss']
})
export class FeedComponent implements OnInit {
  public feed: Feed;
  public avatarPlaceholder = '../../../assets/placeholder.png';
  public postImagePlaceholder = '../../../assets/image-placeholder.png';
  public postForm: FormGroup;
  
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
    private likeService: LikeService,
    private commentsService: CommentService,
    private postService: PostService,
    private formBuilder: FormBuilder,
    private router: Router) {
      this.feed = new Feed();
      this.postForm = this.formBuilder.group({
        text: '',
        post_image: null,
      });
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
      this.feed = data;
      console.log(data);
    });
  }

  //funções de interação com o usuário
  post() {
    var formData: any = new FormData();
    formData.append("text", this.postForm.get('text').value);
    formData.append("post_image", this.postForm.get('post_image').value);
    this.postService.post(this.token, formData).subscribe((data) => {
      console.log(data);
      this.loadFeed();
      this.postForm.reset();
    })
  }

  like(postId) {
    this.likeService.postLike(this.token, postId).subscribe(() => {
      this.loadFeed()
    });
  }


  comment(input, postId) {
    if (!input.value) return;
    this.commentsService.postComment(this.token, postId, input.value).subscribe(data =>{
      this.loadFeed()
    });
    input.value = '';
  }

  logout() {
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }

  uploadFile(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.postForm.patchValue({
      post_image: file
    });
    this.postForm.get('post_image').updateValueAndValidity()
  }
}
