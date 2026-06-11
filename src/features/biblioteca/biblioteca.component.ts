import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { NavbarComponent } from '../../app/shared/components/navbar/navbar.component';

@Component({
  selector: 'app-biblioteca',
  standalone: true,
  imports: [CommonModule, RouterModule, NavbarComponent],
  templateUrl: './biblioteca.component.html',
  styleUrls: ['./biblioteca.component.css']
})
export class BibliotecaComponent {

  constructor(private router: Router) {}

  salir() {
    this.router.navigate(['/login']);
  }

  irALibros() {
    this.router.navigate(['/libros']);
  }
}