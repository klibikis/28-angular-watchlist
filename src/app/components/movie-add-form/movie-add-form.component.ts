import { Component, EventEmitter, Output} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MoviesService  } from '../../services/movies.service'
import { Movie } from 'src/app/types/movie';

@Component({
  selector: 'app-movie-add-form',
  templateUrl: './movie-add-form.component.html',
  styleUrls: ['./movie-add-form.component.scss']
})
export class MovieAddFormComponent{

  reactiveForm: FormGroup;

  constructor(private moviesService:MoviesService){
    const movies = this.moviesService.getMovies()
  }

  @Output() handleSubmit = new EventEmitter<Movie>()


  ngOnInit() {
    this.reactiveForm = new FormGroup({
      title: new FormControl(''),
      image: new FormControl(''),
      type: new FormControl('movie')
    });
  }
  
}
