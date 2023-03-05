import { Component, EventEmitter, Output} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Movie } from 'src/app/types/movie';
import * as uuid from 'uuid';

@Component({
  selector: 'app-movie-add-form',
  templateUrl: './movie-add-form.component.html',
  styleUrls: ['./movie-add-form.component.scss']
})
export class MovieAddFormComponent{

  reactiveForm: FormGroup;

  @Output() handleSubmit = new EventEmitter<Movie>()


  ngOnInit() {
    this.reactiveForm = new FormGroup({
      title: new FormControl(null),
      image: new FormControl(null),
      type: new FormControl('movie')
    });
  }
  handleFormSubmit() {
    this.handleSubmit.emit(this.reactiveForm.value)
    this.reactiveForm.setValue({
      title: null,
      image: null,
      type: 'movie'
    })
  }

}
