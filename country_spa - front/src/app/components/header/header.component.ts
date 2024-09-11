import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatButtonModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  @Output() loginStatusChanged = new EventEmitter<void>();

  @Output() popupEvent = new EventEmitter<string>();
  logged: boolean = false;
  token: string = '';

  openPopup(type: string) {
    this.popupEvent.emit(type);
  }

  ngOnInit(): void {
    const tk = localStorage.getItem("token");

    if(tk) {
      this.logged = true;
      this.token = tk;
    }
  }

  logout(){
    this.logged = false;
    this.token = '';
    localStorage.removeItem("token");
  }

  checkAuthentication() {    
    const tk = localStorage.getItem("token");
    this.logged = !!tk;
  }
}
