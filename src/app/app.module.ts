import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ProductpageComponent } from './pages/productpage/productpage.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LayoutDashboardComponent } from './layout/layout-dashboard/layout-dashboard.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { ProductManagePageComponent } from './pages/product-manage-page/product-manage-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { ListPostsComponent } from './components/list-posts/list-posts.component';
import { ListUserComponent } from './components/list-user/list-user.component';
import { PostDetailComponent } from './pages/post-detail/post-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ProductpageComponent,
    LayoutComponent,
    HeaderComponent,
    DashboardComponent,
    LayoutDashboardComponent,
    NotFoundPageComponent,
    ProductManagePageComponent,
    FooterComponent,
    ListPostsComponent,
    ListUserComponent,
    PostDetailComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
