import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/movie';
import { MoviesService } from 'src/app/services/movies.service';
@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  @Input()
  movie: Movie | undefined;

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.movie = this.moviesService.getMovie();
  }



}
