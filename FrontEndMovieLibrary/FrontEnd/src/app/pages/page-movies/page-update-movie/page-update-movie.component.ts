import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '../../../../../node_modules/@angular/router';
import { Movie } from '../../sdk/models/movie';
import { Observable } from '../../../../../node_modules/rxjs';
import { PageMoviesService } from '../../sdk/services/page-movies.service';
import { delay, switchMap, tap } from 'rxjs/operators';
import { FormGroup, FormControl, Validators } from '../../../../../node_modules/@angular/forms';
import { formatDate } from '../../functions/functions';
import { MessageService } from '../../../../../node_modules/primeng/api';

@Component({
  selector: 'app-page-update-movie',
  templateUrl: './page-update-movie.component.html',
  styleUrls: ['./page-update-movie.component.css']
})
export class PageUpdateMovieComponent implements OnInit {

  @Input() movie: Movie | any;
  @Output() submitForm = new EventEmitter<number>();
  loading = false;
  form: FormGroup = new FormGroup(
    {
      title: new FormControl('', {
        validators: [
          Validators.required
        ]

      }),
      director: new FormControl('', {
        validators: [
          Validators.required
        ]

      }),
      releaseDateDate: new FormControl('', {
        validators: [
          Validators.required
        ]

      }),
      type: new FormControl('', {
        validators: [
          Validators.required
        ]

      }),
      id: new FormControl(),

    });

  constructor(private route: ActivatedRoute, private moviesServices: PageMoviesService, private messageService: MessageService) {


  }

  // tslint:disable-next-line:typedef
  save() {
    if (!this.form.invalid) {
      this.movie = this.form.value;
      const date = formatDate(this.movie.releaseDateDate);
      this.movie.releaseDate = date;
      this.loading = true;
      this.route.paramMap.pipe(
        switchMap(paramMap => this.moviesServices.updateMovie(this.movie.id.toString(), this.movie))).subscribe(data => {
          this.loading = false;
          this.submitForm.emit(1);
        },
        error => {
          this.loading = false;
          this.messageService.add({ severity: 'error', summary: 'Error Message', detail: error.message });
        });

    }

  }

  // tslint:disable-next-line:typedef use-lifecycle-interface
  ngOnChanges() {
    if (this.movie) {
      const arrayRelease = this.movie.releaseDate.split('/');
      const stringRelease = arrayRelease[1] + '/' + arrayRelease[0] + '/' + arrayRelease[2];
      this.movie.releaseDateDate = new Date(stringRelease);
      this.form.patchValue(this.movie);
    }
  }
  // tslint:disable-next-line:typedef
  ngOnInit() {
    /* this.route.paramMap.pipe(
      switchMap(paramMap => this.moviesServices.getMovie(paramMap.get('id')))).subscribe(data => {
         this.movie = data;
         this.form.patchValue(this.movie);
       });*/




  }

}
