import { NgModule } from '@angular/core';
import { MoviesViewComponent } from './components/movies-view/movies-view.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { RouterModule, Routes } from '@angular/router';
import { Movie } from './movie';

const routes: Routes = [
  { path: '', component: MoviesViewComponent },
  { path: 'details', component: MovieDetailsComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
