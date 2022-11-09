import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from './movie-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MovieDetailModule } from '../movie-detail/movie-detail.module';


@NgModule({
  declarations: [
    MovieListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MovieDetailModule
  ],
  exports: [
    MovieListComponent
  ]
})
export class MovieListModule { }
