import { Component, Input } from '@angular/core';
import { MoviesService } from './services/movies.service';
import { Movie } from './types/movie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private moviesService:MoviesService){
    const movies = this.moviesService.getMovies()
  }

  movies: Movie[];

  ngOnInit(){
    this.getMovies()
  }
  getMovies = () => {
    this.moviesService.getMovies().subscribe((response) => {
      this.movies = response;
    })
  }
  deleteMovie = (movieId: string) => {
    this.moviesService.deleteMovie(movieId).subscribe()
    this.movies = this.movies.filter(movie => movie.id !== movieId);
  }
  handleFormSubmit = (submittedMovie:Movie) => {
    this.moviesService.postMovie(submittedMovie).subscribe()
    this.movies=[...this.movies, submittedMovie]
  }
}
