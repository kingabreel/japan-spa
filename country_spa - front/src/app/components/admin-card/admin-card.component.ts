import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CityService } from '../../service/city.service';
import { AddCity } from '../../model/city';
import { AddTouristicAttraction } from '../../model/touristicAttraction';

@Component({
  selector: 'app-admin-card',
  standalone: true,
  imports: [CommonModule, MatCard, MatCardContent, MatFormField, MatLabel, MatCardActions, MatCardTitle, MatCardHeader, FormsModule, MatInputModule, MatButtonModule],
  templateUrl: './admin-card.component.html',
  styleUrl: './admin-card.component.scss'
})
export class AdminCardComponent {

  isCityMode: boolean = true;

  cityName: string = '';
  cityImgUrl: string = '';

  attractionName: string = '';
  attractionDescription: string = '';
  attractionImgUrl: string = '';
  attractionCityName: string = '';

  constructor (private cityService: CityService) {}

  onSwitchMode() {
    this.isCityMode = !this.isCityMode;
  }

  onSubmit() {
    const tk = localStorage.getItem("token");

    if (this.isCityMode) {
      let city: AddCity = {
        name: this.cityName, 
        imgUrl: this.cityImgUrl,
        touristAttractions: []
      }
      if (tk) this.cityService.addCity(city, tk).subscribe(data => alert("City added"));
    } else {
      let attraction: AddTouristicAttraction = {
        name: this.attractionName,
        description: this.attractionDescription,
        imgUrl: this.attractionImgUrl,
        cityName: this.attractionCityName
      };

      if (tk) this.cityService.addTouristicAttraction(attraction, tk).subscribe(data => alert("Touristic attraction added"));
    }
  }

  resetForm(){
    this.cityName = '';
    this.cityImgUrl = '';

    this.attractionName = '';
    this.attractionDescription = '';
    this.attractionImgUrl = '';
    this.attractionCityName = '';
  
  }

}
