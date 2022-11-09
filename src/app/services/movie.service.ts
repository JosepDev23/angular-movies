import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Movie } from '../models/movie';
import { Result } from '../models/result';
import { ExtendedMovie } from '../models/extended-movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private baseUrl = 'https://www.omdbapi.com/'
  private apiKey = '&apiKey=5fefe7ac'

  constructor(private http: HttpClient) { }

  /** The title must have '+' instead of spaces */
  getByTitle(title: string | undefined): Observable<Result> {
    const url = this.baseUrl + '?s=' + title + this.apiKey;
    return this.http.get<Result>(url);
  }

  getByImdbID(id: string | undefined): Observable<ExtendedMovie> {
    const url = this.baseUrl + '?i=' + id + this.apiKey;
    return this.http.get<ExtendedMovie>(url);
  }
}
