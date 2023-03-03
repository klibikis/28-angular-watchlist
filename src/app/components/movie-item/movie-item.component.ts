import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent {

  @Input() imageSrc: string;
  @Input() imageType: string;
  @Output() handleClick = new EventEmitter<void>()


  handleDelete = () => {
    this.handleClick.emit();
  }
}
