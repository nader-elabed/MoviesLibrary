import { PageMoviesModule } from './page-movies.module';

describe('PageMoviesModule', () => {
  let pageMoviesModule: PageMoviesModule;

  beforeEach(() => {
    pageMoviesModule = new PageMoviesModule();
  });

  it('should create an instance', () => {
    expect(pageMoviesModule).toBeTruthy();
  });
});
