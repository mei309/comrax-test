import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Movie } from '../movie';

const moviesPath: string = 'https://wookie.codesubmit.io/movies';
const headers: HttpHeaders = new HttpHeaders({
  Authorization: 'Bearer Wookie2021'
});

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  // nedded for saving when routing
  movie!: Movie;
  constructor(private http: HttpClient) { }

  keepMovie(movie: Movie) {
    this.movie = movie;
  }

  getMovie(): Movie {
    return this.movie;
  }

  getMovies(param: string) {
    let params = new HttpParams().
        set('q',  param);
    return this.http.get(moviesPath, {headers: headers, params: params});
  }
}
