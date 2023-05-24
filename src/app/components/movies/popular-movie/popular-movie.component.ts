import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-popular-movie',
  templateUrl: './popular-movie.component.html',
  styleUrls: ['./popular-movie.component.css'],
})
export class PopularMovieComponent {
  data: any;
  movies: any;
  constructor(private movieService: MovieService) {}
  ngOnInit() {
    this.movieService.getDataPopularMovie().subscribe((data) => {
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
