import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { MoviesService } from './services/movies.service';
import { DatabaseMovie, Movie } from './types/movie';
import * as uuid from 'uuid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  constructor(private moviesService:MoviesService){
  }

  movies: Movie[];
  buttonDisabled: boolean = false;
  toggler: number = 0;

  ngOnInit(){
    this.getMovies()
  }
  getMovies = () => {
    this.moviesService.getMovies().subscribe({
      next: (response) => {
        this.movies = response
        this.chooseMoviesType()
      },
      error: (e) => console.log(e)
    })
  }
  handleFormSubmit = (submittedMovie:Movie) => {
    submittedMovie.id = uuid.v4();
    this.moviesService.postMovie(submittedMovie).subscribe({
      next: () => {
        this.movies = [...this.movies, submittedMovie]
        console.log(this.movies)
      },
      error: (e) => {
        console.log(e)
      }
    })
  }
  chooseMoviesType = () => {
    if(this.toggler===1){
      this.movies = this.movies.filter((movie) => {
        return movie.type==='movie';
      })
    }
    if(this.toggler===2){
      this.movies = this.movies.filter((movie) => {
        return movie.type==='series';
      })
    }
  }
  handleToggle() {
    this.toggler += 1;
    if(this.toggler>2){
      this.toggler = 0;
    }
    console.log(this.toggler)
    this.getMovies()
  }
  // getMoviesFromDatabase = () => {
  //   this.moviesService.getMoviesFromDatabase().subscribe({
  //     next: (response) => {
  //       this.movies = response
  //       console.log(this.movies)
  //     },
  //     error: (e) => console.log(e)
  //   })
  // }
}
