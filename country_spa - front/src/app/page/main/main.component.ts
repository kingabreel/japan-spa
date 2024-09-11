import { Component, OnInit, ViewChild } from '@angular/core';
import { ParallaxDirective } from '../../directives/parallax.directive';
import { CitiesComponent } from "../../components/cities/cities.component";
import { CommonModule } from '@angular/common';
import { AuthFormComponent } from "../../components/auth-form/auth-form.component";
import { MatButton } from '@angular/material/button';
import { jwtDecode } from 'jwt-decode';
import { CommentsComponent } from "../../components/comments/comments.component";
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [HeaderComponent, ParallaxDirective, CitiesComponent, CommonModule, AuthFormComponent, MatButton, CommentsComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit {
  @ViewChild(HeaderComponent) headerComponent?: HeaderComponent;

  showPopup: boolean = false;
  popupType: string = '';
  
  ngOnInit(): void {
    this.checkToken();
  }

  checkToken(){
    const tk = localStorage.getItem("token");

    if(tk) {
      const decodedTk: any = jwtDecode(tk);
      console.log(decodedTk);
      const time = Math.floor(Date.now() / 1000);

      if (decodedTk.exp < time) {
        localStorage.removeItem("token");
      }  
    }
  }

  handlePopupEvent(event: string) {
    this.popupType = event;
    this.showPopup = true;
  }

  closePopup() {
    this.showPopup = false;
    this.popupType = '';
  }

  onLoginEvent() {
    if (this.headerComponent) {
      this.headerComponent.checkAuthentication();
    }
  }
}
