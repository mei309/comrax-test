import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { Movie } from 'src/app/movie';
import { MoviesService } from 'src/app/services/movies.service';
@Component({
  selector: 'app-movies-row',
  templateUrl: './movies-row.component.html',
  styleUrls: ['./movies-row.component.css']
})
export class MoviesRowComponent implements OnInit {
  faArrowLeft = faAngleLeft;
  faArrowRight = faAngleRight;
  @Input()
  movies: Movie[] = [];

  @Input()
  category!: string;

  constructor(private router: Router, private moviesService: MoviesService) {}

  ngOnInit(): void {
  }

  goToDetails(movie: Movie) {
    // keeping the movie before changing a page (could do it also on onDestroy but then we need a observable)
    this.moviesService.keepMovie(movie);
    this.router.navigate(['../details']);
  }

}
