import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Movie } from '../types/movie';
import { Subject } from 'rxjs';
import * as uuid from 'uuid';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

private refetchMovies = new Subject();

constructor(private http: HttpClient) {}

get refetch() {
  return this.refetchMovies.asObservable()
}

getMovies() {
  return this.http.get<Movie[]>('http://localhost:3006/movies')
}
deleteMovie(movieId: string){
  return this.http.delete<Movie>(`http://localhost:3006/movies/delete/${movieId}`)
}
postMovie({title, image, type}: Movie){
  const id = uuid.v4();
  return this.http.post<Movie>(`http://localhost:3006/movies/new`, {
    title,
    image,
    type,
    id
  })
}

}

