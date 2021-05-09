import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAddMovieComponent } from './page-add-movie.component';

describe('PageAddMovieComponent', () => {
  let component: PageAddMovieComponent;
  let fixture: ComponentFixture<PageAddMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAddMovieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAddMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
