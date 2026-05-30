import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private router: Router) {}

  loginConGoogle(): void {
    alert('Inicio de sesión con Google temporalmente deshabilitado');
  }

  entrar(): void {
    this.router.navigate(['/biblioteca']);
  }

  loginConFacebook(): void {
    alert('Conectando con Facebook...');

    setTimeout(() => {
      this.router.navigate(['/biblioteca']);
    }, 1000);
  }
}