import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Movie } from 'src/app/movie';
import { MoviesService } from 'src/app/services/movies.service';
import { SearchListenerService } from 'src/app/services/search-listener.service';

@Component({
  selector: 'app-movies-view',
  templateUrl: './movies-view.component.html',
  styleUrls: ['./movies-view.component.css']
})
export class MoviesViewComponent implements OnInit {

  subscription!: Subscription;

  moviesRow: Movie[] = [];
  unique: string[] = []
  constructor(private searchListener: SearchListenerService, private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.subscription = this.searchListener.searchSubscribe().subscribe(serc => {
      //its http therefor we dont need to unsubscribe (promise)
      this.moviesService.getMovies(serc).subscribe((movieList: any) => {
        // to find all the genres types
        this.unique = [...new Set((movieList.movies.map((a: Movie) => a.genres)).flat(1))] as string[];
        this.moviesRow = movieList.movies;
      });
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
