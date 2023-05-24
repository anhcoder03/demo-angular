import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvPageComponent } from './tv-page.component';

describe('TvPageComponent', () => {
  let component: TvPageComponent;
  let fixture: ComponentFixture<TvPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TvPageComponent]
    });
    fixture = TestBed.createComponent(TvPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
