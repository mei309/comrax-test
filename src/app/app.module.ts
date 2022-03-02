import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { MoviesRowComponent } from './components/movies-row/movies-row.component';
import { MoviesViewComponent } from './components/movies-view/movies-view.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { FilterPipePipe } from './services/filter-pipe.pipe';
import { ScrollableDirective } from './services/scrollable.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MoviesRowComponent,
    MoviesViewComponent,
    MovieCardComponent,
    FilterPipePipe,
    ScrollableDirective,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
