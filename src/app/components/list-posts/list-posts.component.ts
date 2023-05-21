import { Component } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.css'],
})
export class ListPostsComponent {
  posts: any = [];
  constructor(private postService: PostService) {}

  ngOnInit() {
    this.postService.getPost().subscribe((data) => {
      this.posts = data;
    });
  }
}
