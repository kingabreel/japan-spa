import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { ParallaxDirective } from '../../directives/parallax.directive';
import { CitiesComponent } from "../../components/cities/cities.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [HeaderComponent, ParallaxDirective, CitiesComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
