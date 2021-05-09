import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageListMoviesComponent } from './page-list-movies.component';

describe('PageListMoviesComponent', () => {
  let component: PageListMoviesComponent;
  let fixture: ComponentFixture<PageListMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageListMoviesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageListMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
