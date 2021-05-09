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
  selector: 'app-add-movie',
  templateUrl: './page-add-movie.component.html',
  styleUrls: ['./page-add-movie.component.css']
})
export class PageAddMovieComponent implements OnInit, OnChanges {

  movie: Movie;
  @Output() submitForm = new EventEmitter<number>();
  loading = false;
  formSubmitted = false;
  form: FormGroup;

  initForm() {
    this.form = new FormGroup(
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
  }
  constructor(private route: ActivatedRoute, private moviesServices: PageMoviesService, private messageService: MessageService) {

    this.initForm();
  }

  save() {
    this.formSubmitted = true;
    if (!this.form.invalid) {
      this.movie = this.form.value;
      const date = formatDate(this.movie.releaseDateDate);
      this.movie.releaseDate = date;
      this.loading = true;
      this.route.paramMap.pipe(
        switchMap(paramMap => this.moviesServices.addMovie(this.movie))).subscribe(data => {
          this.loading = false;
          this.submitForm.emit(1);
          this.initForm();
          this.formSubmitted = false;
        },
        error => {
          this.loading = false;
          this.messageService.add({ severity: 'error', summary: 'Error Message', detail: error.message });
        });

    }

  }
  ngOnChanges() {
    if (this.movie) {
      const arrayRelease = this.movie.releaseDate.split('/');
      const stringRelease = arrayRelease[1] + '/' + arrayRelease[0] + '/' + arrayRelease[2];
      this.movie.releaseDateDate = new Date(stringRelease);
      this.form.patchValue(this.movie);
    }
  }
  ngOnInit() {
    /* this.route.paramMap.pipe(
      switchMap(paramMap => this.moviesServices.getMovie(paramMap.get('id')))).subscribe(data => {
         this.movie = data;
         this.form.patchValue(this.movie);
       });*/




  }

}
