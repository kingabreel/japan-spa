import { Component, OnInit } from '@angular/core';
import { CityService } from '../../service/city.service';
import { City } from '../../model/city';
import { CommonModule } from '@angular/common';
import {MatPaginatorModule} from '@angular/material/paginator';

@Component({
  selector: 'app-cities',
  standalone: true,
  imports: [CommonModule, MatPaginatorModule],
  templateUrl: './cities.component.html',
  styleUrl: './cities.component.scss'
})
export class CitiesComponent implements OnInit{
  cities: City[] = [];
  selectedCity: any = null;
  hover: any = null;
  active = true;
  totalElements:number = 0;

  constructor(private cityService: CityService){}

  ngOnInit(): void{
    this.cityService.getCity(0, 1000).subscribe({
      next: (data) => {
        this.totalElements = data.totalElements
      },
      error: (error) => console.log(error)
    });
    this.loadCity();
  }

  loadCity(pageNumber: number = 0, pageSize: number = 12){
    this.cityService.getCity(pageNumber, pageSize).subscribe({
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

  onPageChange(event: any) {
    this.loadCity(event.pageIndex, event.pageSize);
  }
}
