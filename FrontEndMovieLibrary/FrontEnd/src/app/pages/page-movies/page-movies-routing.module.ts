import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageListMoviesComponent } from './page-list-movies/page-list-movies.component';

const routes: Routes = [
  { path: 'list', component: PageListMoviesComponent }



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageMoviesRoutingModule { }
