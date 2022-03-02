import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { Movie } from 'src/app/movie';
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

  ngOnInit(): void {

  }
}
