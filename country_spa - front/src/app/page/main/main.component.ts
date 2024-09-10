import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { ParallaxDirective } from '../../directives/parallax.directive';
import { CitiesComponent } from "../../components/cities/cities.component";
import { CommonModule } from '@angular/common';
import { AuthFormComponent } from "../../components/auth-form/auth-form.component";
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [HeaderComponent, ParallaxDirective, CitiesComponent, CommonModule, AuthFormComponent, MatButton],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  showPopup: boolean = false;
  popupType: string = '';
  
  handlePopupEvent(event: string) {
    this.popupType = event;
    this.showPopup = true;
  }

  closePopup() {
    this.showPopup = false;
    this.popupType = '';
  }
}
