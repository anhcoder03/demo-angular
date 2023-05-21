import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css'],
})
export class PostDetailComponent {
  postId: any;
  postData: any;
  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) {}

  ngOnInit() {
    this.postId = this.route.snapshot.paramMap.get('id');
    console.log(this.postId);
    this.postService.getPostById(this.postId).subscribe((data) => {
      console.log(data);
      this.postData = data;
    });
  }
}
