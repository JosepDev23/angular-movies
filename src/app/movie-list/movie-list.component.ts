import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, map, tap } from 'rxjs';
import { ExtendedMovie } from '../models/extended-movie';
import { Movie } from '../models/movie';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  findMovie = new FormControl('');

  detail = false;

  movies: Movie[]= [];
  selectedMovie: ExtendedMovie = {
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

  constructor(private movieService: MovieService) {
    this.findMovie.valueChanges.pipe(
      map(search  => search?.toLowerCase().replace(' ', '+')),
      debounceTime(300),
      distinctUntilChanged(),
      filter(search => search !== ''),
      tap(search => this.movieService.getByTitle(search).subscribe(res => {
        this.movies = res.Search;
      }))
    ).subscribe();
  }

  ngOnInit(): void {
  }

  onSelectMovie(movie: Movie) {
    this.movieService.getByImdbID(movie.imdbID).subscribe(res => {
      this.selectedMovie = res;
    });
    this.detail = true;
  }

}
