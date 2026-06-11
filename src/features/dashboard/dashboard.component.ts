import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NavbarComponent } from '../../app/shared/components/navbar/navbar.component';
import { BookService } from '../books/services/book.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink, NavbarComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    libros: any [] = [];

    librosTerminados = 0;
    librosLeyendo = 0;
    librosPendientes = 0;
    promedioRating = 0;
    totalGeneros = 0;

  constructor(
    private router: Router,
    private bookService: BookService
  ) {}

  ngOnInit(): void {
    this.bookService.getBooks().subscribe({
      next: (data: any) => {

  this.libros = Array.isArray(data)
    ? data
    : (data.books || data.data || [data]);

  this.librosTerminados = this.libros.filter(
  libro => libro.Estado === 'Terminado'
).length;

this.librosLeyendo = this.libros.filter(
  libro => libro.Estado === 'Leyendo'
).length;

this.librosPendientes = this.libros.filter(
  libro => libro.Estado === 'Pendiente'
).length;

  const sumaRatings =
    this.libros.reduce(
      (acc, libro) => acc + (libro.Rating || 0),
      0
    );

  this.promedioRating =
    this.libros.length > 0
      ? Number((sumaRatings / this.libros.length).toFixed(1))
      : 0;

  const generos = new Set();

  this.libros.forEach(libro => {
    if (libro.Genero) {
      libro.Genero.forEach((g: string) => generos.add(g));
    }
  });

  this.totalGeneros = generos.size;
}
    });
  }

  salir() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}