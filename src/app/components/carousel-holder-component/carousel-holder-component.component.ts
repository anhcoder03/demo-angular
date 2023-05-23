import { OwlOptions } from 'ngx-owl-carousel-o';
import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel-holder-component',
  templateUrl: './carousel-holder-component.component.html',
  styleUrls: ['./carousel-holder-component.component.css'],
})
export class CarouselHolderComponentComponent {
  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    dots: true,
    autoHeight: true,
    navSpeed: 700,
    navText: [
      '<i class="fa fa-angle-left"><</i>',
      '<i class="fa fa-angle-right">></i>',
    ],
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
