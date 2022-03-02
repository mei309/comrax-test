import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

const moviesPath: string = 'https://wookie.codesubmit.io/movies';
const headers: HttpHeaders = new HttpHeaders({
  Authorization: 'Bearer Wookie2021'
});

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  getMovies(param: string) {
    let params = new HttpParams().
        set('q',  param);
    return this.http.get(moviesPath, {headers: headers, params: params});
  }
}
