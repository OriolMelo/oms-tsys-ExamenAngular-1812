import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-film-list',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './film-list.component.html',
  styleUrl: './film-list.component.css'
})
export class FilmListComponent {

  movies:any = null;

  filter:string = ""

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
    this.moviesService.getMoviesByName(this.filter)
      .subscribe(
        (result: any) => {
          this.movies = result.results
        }
      )
  }
}
