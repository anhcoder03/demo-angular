import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularMovieComponent } from './popular-movie.component';

describe('PopularMovieComponent', () => {
  let component: PopularMovieComponent;
  let fixture: ComponentFixture<PopularMovieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopularMovieComponent]
    });
    fixture = TestBed.createComponent(PopularMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
