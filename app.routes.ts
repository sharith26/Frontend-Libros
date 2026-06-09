import { Routes } from '@angular/router';
import { LoginComponent } from './src/feacture/auth/components/login/login.component';
import { BookList } from './src/feacture/auth/books/components/book-list/book-list';
import { RegisterComponent } from './src/feacture/auth/components/register/register.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // <-- Asegura que tenga el pathMatch
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegisterComponent },
  { path: 'biblioteca', component: BookList }, 
  { path: '**', redirectTo: 'login' }
];