import { OwlOptions } from 'ngx-owl-carousel-o';
import { Component } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-carousel-holder-component',
  templateUrl: './carousel-holder-component.component.html',
  styleUrls: ['./carousel-holder-component.component.css'],
})
export class CarouselHolderComponentComponent {
  data: any;
  movies: any;
  constructor(private movieService: MovieService) {}
  ngOnInit() {
    this.movieService.getDataUpComing().subscribe((data) => {
      this.data = data;
      this.movies = this.data.results;
    });
  }
  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    dots: true,
    navText: ['<', '>'],
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  };
}
