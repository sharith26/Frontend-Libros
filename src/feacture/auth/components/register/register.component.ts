import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common'; 
// Salimos 3 niveles: register -> components -> app, y apuntamos al nombre real: auth.service
import { AuthService } from '../../books/components/models/services/auth.service'; 

@Component({
  selector: 'app-register',
  standalone: true, 
  imports: [CommonModule, FormsModule, RouterLink], 
  templateUrl: './register.component.html',
  styleUrls: [] 
})
export class RegisterComponent {
  private authService = inject(AuthService);
  private router = inject(Router);

  username = '';
  email = '';
  password = '';
  
  errorMessage = '';
  successMessage = '';

  sendRegister(): void {
    if (!this.username || !this.email || !this.password) {
      this.errorMessage = 'Por favor, completa todos los campos.';
      return;
    }

    const body = {
      username: this.username,
      email: this.email,
      password: this.password
    };

    this.authService.register(body).subscribe({
      next: (response: any) => {
        console.log('Registro exitoso:', response);
        this.errorMessage = '';
        this.successMessage = '¡Usuario registrado correctamente! Redirigiendo al login...';
        
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 2000);
      },
      error: (err: any) => {
        this.successMessage = '';
        this.errorMessage = err?.error?.message || 'Ocurrió un error durante el registro.';
      }
    });
  }
}