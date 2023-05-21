import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}

  getPost() {
    return this.http.get('https://gorest.co.in/public/v2/posts');
  }
  getPostById(id: any) {
    return this.http.get(`https://gorest.co.in/public/v2/posts/${id}`);
  }
}
