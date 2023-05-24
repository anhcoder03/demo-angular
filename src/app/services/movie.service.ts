import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) {}
  getDataUpComing() {
    return this.http.get(
      'https://api.themoviedb.org/3/movie/upcoming?api_key=95f2419536f533cdaa1dadf83c606027'
    );
  }
  getDataPopularMovie() {
    return this.http.get(
      'https://api.themoviedb.org/3/movie/popular?api_key=95f2419536f533cdaa1dadf83c606027'
    );
  }
  getDataTopRatedMovie() {
    return this.http.get(
      'https://api.themoviedb.org/3/movie/top_rated?api_key=95f2419536f533cdaa1dadf83c606027'
    );
  }
  getMovieDetail(movieId: any) {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=95f2419536f533cdaa1dadf83c606027`
    );
  }

  getCelebs() {
    return this.http.get(
      'https://api.themoviedb.org/3/person/popular?api_key=95f2419536f533cdaa1dadf83c606027'
    );
  }
}
