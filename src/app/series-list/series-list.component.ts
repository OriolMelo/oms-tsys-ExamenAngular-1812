import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SeriesService } from '../services/series.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-series-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './series-list.component.html',
  styleUrl: './series-list.component.css'
})
export class SeriesListComponent {

  series_list: any = null;

  constructor(private seriesService: SeriesService){}

  ngOnInit(): void{
    this.seriesService.getSeries()
      .subscribe(
        (result: any)=> {
          console.log(result)
          this.series_list = result.results;
          console.log(this.series_list)
        }
      );
  }
}
