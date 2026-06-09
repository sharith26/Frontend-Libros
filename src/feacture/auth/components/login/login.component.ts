import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms'; // ¡OBLIGATORIO para capturar el ngModel del HTML!
import { CommonModule } from '@angular/common';
import { AuthService } from '../../books/components/models/services/auth.service'; // Conexión con tu servicio real

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink], // Agregamos las herramientas necesarias
  templateUrl: './login.component.html',
  styleUrl: './login.component.css' // Tus estilos se mantienen intactos
})
export class LoginComponent {
  // Usamos inject que es la forma moderna de Angular para traer los servicios
  private authService = inject(AuthService);
  private router = inject(Router);

  // Variables que se amarran a tus inputs del HTML
  email = '';
  password = '';
  errorMessage = '';

  // Esta función reemplaza la lógica simple de entrar() por una conexión real
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
        // Guardamos el token JWT que devuelve el backend en la sesión
        sessionStorage.setItem('auth_token', response.token);
        this.errorMessage = '';
        
        // Si todo está bien, pasamos a la tabla de libros
        this.router.navigate(['/biblioteca']);
      },
      error: (err: any) => {
        // Si las credenciales fallan, mostramos el error sin dañar el diseño
        this.errorMessage = err?.error?.message || 'Error al iniciar sesión. Verifica tus datos.';
      }
    });
  }

  // Conservamos tus funciones de redes sociales tal y como las tenías
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