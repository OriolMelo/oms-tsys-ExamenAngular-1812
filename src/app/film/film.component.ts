import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-film',
  standalone: true,
  imports: [],
  templateUrl: './film.component.html',
  styleUrl: './film.component.css'
})
export class FilmComponent {

  movie: any = null;
  id:any = null

  constructor(private movieService: MoviesService, private route: ActivatedRoute){}

  ngOnInit(): void{
    this.id = this.route.snapshot.paramMap.get('id');

    this.movieService.getMovie(this.id)
      .subscribe(
        result=> {
          this.movie = result;
        }
      );
  }
}
