import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  readonly url = "https://api.themoviedb.org/3/tv/"
  readonly api_key = "54cc84f4a4669c4cdf62edb6053b9c07"

  constructor(private http: HttpClient) { }

  getSeries() {
    return this.http.get(this.url+"popular"+"?api_key="+this.api_key);
  }  

  getSerie(id_Serie: number[]) {
    return this.http.get(this.url+id_Serie+"?api_key="+this.api_key);
  }
}
