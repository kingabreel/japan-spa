import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CityService } from '../../service/city.service';
import { City } from '../../model/city';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cities',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cities.component.html',
  styleUrl: './cities.component.scss'
})
export class CitiesComponent implements OnInit, OnChanges{
  cities: City[] = [];
  selectedCity: any = null;
  hover: any = null;

  constructor(private cityService: CityService){}

  ngOnInit(): void{
    this.cityService.getCity().subscribe({
      next: (data) => {
        this.cities = data.content;
        console.log(data);
      },
      error: (error) => console.log(error)
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    
  }

  selectCity(city: any) {
    this.selectedCity = city;
  }

  showAttraction(attraction: any) {
    this.hover = attraction;
  }

  hideAttraction() {
    this.hover = null;
  }

}
