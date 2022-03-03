import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { MoviesRowComponent } from './components/movies-row/movies-row.component';
import { MoviesViewComponent } from './components/movies-view/movies-view.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';
import { ScrollableDirective } from './services/scrollable.directive';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { AppRoutingModule } from './app-routing.module';
import { AddSpacePipe } from './pipes/add-space.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MoviesRowComponent,
    MoviesViewComponent,
    MovieDetailsComponent,
    FilterPipePipe,
    ScrollableDirective,
    AddSpacePipe,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
