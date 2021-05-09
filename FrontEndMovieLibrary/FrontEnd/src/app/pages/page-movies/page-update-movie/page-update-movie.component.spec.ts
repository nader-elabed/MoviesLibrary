import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageUpdateMovieComponent } from './page-update-movie.component';

describe('PageUpdateMovieComponent', () => {
  let component: PageUpdateMovieComponent;
  let fixture: ComponentFixture<PageUpdateMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageUpdateMovieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageUpdateMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
