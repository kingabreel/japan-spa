import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { jwtDecode } from 'jwt-decode';

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

  @Output() adminPanelEvent = new EventEmitter<void>();
  
  logged: boolean = false;
  token: string = '';
  admin: boolean = false;
  
  openPopup(type: string) {
    this.popupEvent.emit(type);
  }

  ngOnInit(): void {
    const tk = localStorage.getItem("token");

    if(tk) {
      this.logged = true;
      this.token = tk;
      this.adminPanelCheck();
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

    this.adminPanelCheck();
  }

  adminPanelCheck(){
    if (this.token) {
      const decdedTk: any = jwtDecode(this.token);

      this.admin = decdedTk.roles == "admin" ? true : false;
    }
  }

  openAdminPanel(){
    this.adminPanelEvent.emit();
  }
}
