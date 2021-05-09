import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageUpdateMovieComponent } from './page-update-movie/page-update-movie.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PageAddMovieComponent } from './page-add-movie/page-add-movie.component';
import { PageFilterMoviesComponent } from './page-filter-movies/page-filter-movies.component';
import { PageMoviesRoutingModule } from './page-movies-routing.module';
import { PageListMoviesComponent } from './page-list-movies/page-list-movies.component';
import {CommonLoadModule} from '../common/commonLoad.module';


@NgModule({
    imports: [
        CommonModule,
      CommonLoadModule,
      FormsModule, ReactiveFormsModule, PageMoviesRoutingModule
    ],
  exports: [PageUpdateMovieComponent, PageAddMovieComponent, PageFilterMoviesComponent
  ],
  providers: [],
  declarations: [PageListMoviesComponent, PageUpdateMovieComponent, PageAddMovieComponent, PageFilterMoviesComponent]
})
export class PageMoviesModule { }
