import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeriesService } from '../services/series.service';

@Component({
  selector: 'app-series',
  standalone: true,
  imports: [],
  templateUrl: './series.component.html',
  styleUrl: './series.component.css'
})
export class SeriesComponent {

  serie: any = null;
  id:any = null

  constructor(private seriesService: SeriesService, private route: ActivatedRoute){}

  ngOnInit(): void{
    this.id = this.route.snapshot.paramMap.get('id');
    this.seriesService.getSerie(this.id)
      .subscribe(
        result=> {
          this.serie = result;
        }
      );
  }
}
