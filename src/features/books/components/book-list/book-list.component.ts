import { CommonModule } from '@angular/common';
import { BookService } from '../../services/book.service';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core'; 
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../../../app/shared/components/navbar/navbar.component';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule, RouterLink, NavbarComponent],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css',
})
export class BookList implements OnInit {
  libros: any[] = []; 

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
      error: (err:any) => console.error('Error al traer libros:', err)
    });
  }

  salir(): void {
    this.router.navigate(['/']); 
  }

formatRating(rating: number): string {
    if (!rating) return 'No rating';
    const fullStars = '⭐'.repeat(Math.floor(rating));
    const halfStar = rating % 1 !== 0 ? '½' : '';
    return fullStars + halfStar;
  }
} 
