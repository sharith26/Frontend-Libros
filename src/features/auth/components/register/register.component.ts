import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  private authService = inject(AuthService);
  private router = inject(Router);

  nombre = '';
  email = '';
  password = '';
  telefono = '';
  biografia = '';

  loading = false;
  errorMessage = '';
  successMessage = '';

  sendRegister(): void {

    this.errorMessage = '';
    this.successMessage = '';

    if (!this.nombre || !this.email || !this.password) {
      this.errorMessage = 'Nombre, email y password son obligatorios';
      return;
    }

    this.loading = true;

    const body = {
  nombre: this.nombre,
  email: this.email,
  password: this.password,
  telefono: this.telefono,
  biografia: this.biografia
};

console.log('Se ejecutó sendRegister');
console.log(this.authService);

this.authService.register(body).subscribe({
  next: () => {
    this.loading = false;
    this.successMessage = 'Registro exitoso';

    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 1500);
  },
  error: (err: any) => {
    this.loading = false;
    this.errorMessage =
      err?.error?.message || 'Error al registrar usuario';
  }
});
  }
}