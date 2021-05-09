import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFilterMoviesComponent } from './page-filter-movies.component';

describe('PageFilterMoviesComponent', () => {
  let component: PageFilterMoviesComponent;
  let fixture: ComponentFixture<PageFilterMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageFilterMoviesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageFilterMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
