import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-film-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './film-list.component.html',
  styleUrl: './film-list.component.css'
})
export class FilmListComponent {

  movies:any = null;

  num_characters: number[] = [];

  constructor(private moviesService: MoviesService){}

  ngOnInit(): void{
    this.moviesService.getMovies()
      .subscribe(
        (result: any)=> {
          this.movies = result.results;
        }
      );
  }

  onSubmit(): void{

  }
}
