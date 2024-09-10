import { Component, OnInit } from '@angular/core';
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
export class CitiesComponent implements OnInit{
  cities: City[] = [];
  selectedCity: any = null;
  hover: any = null;
  active = true;

  constructor(private cityService: CityService){}

  ngOnInit(): void{
    this.cityService.getCity().subscribe({
      next: (data) => {
        this.cities = data.content;
      },
      error: (error) => console.log(error)
    })
  }

  selectCity(city: any) {
    this.hideAttraction();
    if (city == this.selectedCity) this.selectedCity = null;
    else this.selectedCity = city;
  }

  showAttraction(attraction: any) {
    this.hover = attraction;
  }

  hideAttraction() {
    this.hover = null;
  }

  onBurgerClicked() {
    this.active = !this.active;
  }
}
