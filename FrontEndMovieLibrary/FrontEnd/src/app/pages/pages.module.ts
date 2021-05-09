import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { PageHomeComponent } from './page-home/page-home.component';
import { PageMoviesModule } from './page-movies/page-movies.module';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule
  ],
  declarations: [PageHomeComponent]
})
export class PagesModule { }
