import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) {}
  getDataUpComing() {
    return this.http.get(
      'https://api.themoviedb.org/3/movie/popular?api_key=95f2419536f533cdaa1dadf83c606027'
    );
  }
  getMovieDetail() {
    return this.http.get(
      'https://api.themoviedb.org/3/movie/122?api_key=95f2419536f533cdaa1dadf83c606027'
    );
  }
  getCelebs() {
    return this.http.get(
      'https://api.themoviedb.org/3/person/popular?api_key=95f2419536f533cdaa1dadf83c606027'
    );
  }
}
