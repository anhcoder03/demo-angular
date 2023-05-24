import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-top-rated-movie',
  templateUrl: './top-rated-movie.component.html',
  styleUrls: ['./top-rated-movie.component.css'],
})
export class TopRatedMovieComponent {
  data: any;
  movies: any;
  constructor(private movieService: MovieService) {}
  ngOnInit() {
    this.movieService.getDataTopRatedMovie().subscribe((data) => {
      this.data = data;
      this.movies = this.data.results;
      console.log(this.movies);
    });
  }
  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    // dots: true,
    navText: ['<', '>'],
    nav: true,
    margin: 10,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 5,
      },
    },
  };
}
