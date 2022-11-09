import { Component, Input, OnInit } from '@angular/core';
import { ExtendedMovie } from '../models/extended-movie';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  @Input()
  movie: ExtendedMovie = {
    Title: 'ERROR',
    Year: 'ERROR',
    imdbID: 'ERROR',
    Type: 'ERROR',
    Poster: 'ERROR',
    Released: 'ERROR',
    Language: 'ERROR',
    Plot: 'ERROR',
    Runtime: 'ERROR'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
