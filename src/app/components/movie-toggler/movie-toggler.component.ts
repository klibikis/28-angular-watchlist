import { Component } from '@angular/core';
import { Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-movie-toggler',
  templateUrl: './movie-toggler.component.html',
  styleUrls: ['./movie-toggler.component.scss']
})
export class MovieTogglerComponent {

  @Output() handleToggle = new EventEmitter<void>()
  @Input() toggler: number;

  togglerChangeStyle() {
    return{
      'toggler-all': this.toggler===0,
      'toggler-movies': this.toggler===1,
      'toggler-series': this.toggler===2
    }
  }

}


