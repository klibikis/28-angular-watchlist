import { Component, ViewChild, AfterViewInit, Input } from '@angular/core';
import { } from '../movie-add-form/movie-add-form.component'

import { MoviesService  } from '../../services/movies.service'
import { Movie } from 'src/app/types/movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})

export class MovieListComponent {

  @Input() movies: Movie[];

  constructor(private moviesService:MoviesService){
  }

  deleteMovie = (movieId: string) => {
    this.moviesService.deleteMovie(movieId).subscribe({
      next: () => this.movies = this.movies.filter(movie => movie.id !== movieId),
      error: (e) => console.log(e)
    })
  }

  // deleteMovie = (movieId: string) => {
  //   this.moviesService.deleteMovie(movieId).subscribe()
  //   this.movies = this.movies.filter(movie => movie.id !== movieId);
  // }
}
