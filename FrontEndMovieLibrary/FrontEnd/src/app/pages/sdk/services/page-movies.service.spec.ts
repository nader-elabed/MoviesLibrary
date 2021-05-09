import { TestBed } from '@angular/core/testing';

import { PageMoviesService } from './page-movies.service';

describe('PageMoviesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PageMoviesService = TestBed.get(PageMoviesService);
    expect(service).toBeTruthy();
  });
});
