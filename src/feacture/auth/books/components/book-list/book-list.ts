import { CommonModule } from '@angular/common';
import { BookService } from '../models/services/book'; 
import { Component, OnInit, ChangeDetectorRef } from '@angular/core'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-list.html',
  styleUrl: './book-list.css',
})
export class BookList implements OnInit {
  libros: any[] = []; 

  // 2. <--- NUEVO: Agregar Router al constructor
  constructor(
    private bookService: BookService, 
    private cdr: ChangeDetectorRef,
    private router: Router 
  ) {}

  ngOnInit(): void {
    this.bookService.getBooks().subscribe({
      next: (data: any) => {
        this.libros = Array.isArray(data) ? data : (data.books || data.data || [data]);
        this.cdr.detectChanges();
        console.log('Datos cargados:', this.libros);
      },
      error: (err) => console.error('Error al traer libros:', err)
    });
  }

  // 3. <--- NUEVO: Función para volver al Login
  salir(): void {
    this.router.navigate(['/']); 
  }

formatRating(rating: number): string {
    if (!rating) return 'No rating';
    const fullStars = '⭐'.repeat(Math.floor(rating));
    const halfStar = rating % 1 !== 0 ? '½' : '';
    return fullStars + halfStar;
  }
} // <--- Esta llave cierra la clase BookList. Asegúrate de que no haya otra después.
