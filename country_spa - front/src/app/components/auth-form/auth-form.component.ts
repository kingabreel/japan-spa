import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-auth-form',
  standalone: true,
  imports: [MatInputModule, FormsModule, MatCardModule, MatButtonModule, MatFormFieldModule, CommonModule],
  templateUrl: './auth-form.component.html',
  styleUrl: './auth-form.component.scss'
})
export class AuthFormComponent {
  isLoginMode: boolean = false;
  @Input()
  popup:string = '';

  name: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  age: number = 0;

  constructor(private service: AuthService) {}

  ngOnInit(): void {
    if(this.popup == "login") this.isLoginMode = true;
    else this.isLoginMode = false;
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit() {
    if (this.isLoginMode) {
      this.service.login({email: this.email, password: this.password}).subscribe(token => {
        localStorage.setItem('authToken', token.token_access);
      });
    } else {
      if (this.password == this.confirmPassword){
        this.service.register({name: this.name, email: this.email, password: this.password}).subscribe(() => {
          alert("User registered succesfully");
          this.isLoginMode = true;
        })
      } else {
        alert("Password didn't match");
      }
    }
  }
}
