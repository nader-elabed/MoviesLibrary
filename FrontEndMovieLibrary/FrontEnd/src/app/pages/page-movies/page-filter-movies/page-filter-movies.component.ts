import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Movie } from '../../sdk/models/movie';

@Component({
  selector: 'app-page-filter-movies',
  templateUrl: './page-filter-movies.component.html',
  styleUrls: ['./page-filter-movies.component.css']
})
export class PageFilterMoviesComponent implements OnInit {

  @Output() movieEmitter = new EventEmitter<Movie>();
  // @ts-ignore
  movie: Movie = { title: '', director: '', releaseDateDate: null, releaseDate: '', type: '', id: 0 };
  constructor() { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
  }
  // tslint:disable-next-line:typedef
  search() {
    this.movieEmitter.emit(this.movie);
  }

}
