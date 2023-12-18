import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  readonly url = "https://api.themoviedb.org/3/movie/"
  readonly api_key = "54cc84f4a4669c4cdf62edb6053b9c07"

  constructor(private http: HttpClient) { }

  getMovies() {
    return this.http.get(this.url+"popular"+"?api_key="+this.api_key);
  }  

  getMovie(id_Movie: number[]) {
    return this.http.get(this.url+id_Movie+"?api_key="+this.api_key);
  }

  getMoviesByName(title: String){
    return this.http.get(this.url+title+"?api_key="+this.api_key);
  }
}
