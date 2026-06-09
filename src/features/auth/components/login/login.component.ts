import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service'; 

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink], 
  templateUrl: './login.component.html',
  styleUrl: './login.component.css' 
})
export class LoginComponent {
  private authService = inject(AuthService);
  private router = inject(Router);

  email = '';
  password = '';
  errorMessage = '';

  sendLogin(): void {
    if (!this.email || !this.password) {
      this.errorMessage = 'Por favor, ingresa tus credenciales.';
      return;
    }

    const body = {
      email: this.email,
      password: this.password
    };

    this.authService.login(body).subscribe({
      next: (response: any) => {
        sessionStorage.setItem('auth_token', response.token);
        this.errorMessage = '';
        
        this.router.navigate(['/biblioteca']);
      },
      error: (err: any) => {
        this.errorMessage = err?.error?.message || 'Error al iniciar sesión. Verifica tus datos.';
      }
    });
  }

  loginConGoogle(): void {
    alert('Inicio de sesión con Google temporalmente deshabilitado');
  }

  loginConFacebook(): void {
    alert('Conectando con Facebook...');
    setTimeout(() => {
      this.router.navigate(['/biblioteca']);
    }, 1000);
  }
}