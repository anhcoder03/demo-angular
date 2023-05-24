import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
})
export class MovieDetailComponent {
  movieId: any;
  movie: any;
  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {}
  ngOnInit() {
    this.movieId = this.route.snapshot.paramMap.get('id');
    this.movieService.getMovieDetail(this.movieId).subscribe((data) => {
      this.movie = data;
      console.log(data);
    });
  }
}
