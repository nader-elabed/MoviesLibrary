import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageHomeComponent } from './page-home/page-home.component';


const routes: Routes = [
  { path: 'movies', loadChildren: './page-movies/page-movies.module#PageMoviesModule' },
  { path: '', component: PageHomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
