import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout/layout.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LayoutDashboardComponent } from './layout/layout-dashboard/layout-dashboard.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { ProductManagePageComponent } from './pages/product-manage-page/product-manage-page.component';
import { PostDetailComponent } from './pages/post-detail/post-detail.component';
import { TvPageComponent } from './pages/tv-page/tv-page.component';
import { MovieDetailComponent } from './pages/movie-detail/movie-detail.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: HomepageComponent },
      { path: 'tvseries', component: TvPageComponent },
      { path: 'movie/:id', component: MovieDetailComponent },
    ],
  },
  {
    path: 'admin',
    component: LayoutDashboardComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      {
        path: 'product',
        component: ProductManagePageComponent,
      },
    ],
  },
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
