import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { BookList } from './components/book-list/book-list';

export const routes: Routes = [
  // Esta línea hace que al entrar a la web, cargue el Login por defecto
    { path: '', component: LoginComponent }, 

  // Esta línea es para que después de loguearte vayas a tu tabla
    { path: 'biblioteca', component: BookList } 
];