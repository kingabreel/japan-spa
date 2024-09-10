import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { ParallaxDirective } from '../../directives/parallax.directive';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [HeaderComponent, ParallaxDirective],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
