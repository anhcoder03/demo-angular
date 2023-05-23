import { Component } from '@angular/core';
import { IListMenu } from 'src/app/interface/listMenu';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  listMenu: IListMenu[] = [
    {
      title: 'Trang Chủ',
      path: '',
    },
    {
      title: 'TV Series',
      path: 'tvseries',
    },
    {
      title: 'Celebs',
      path: 'celebs',
    },
  ];
}
