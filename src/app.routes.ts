import { Routes } from '@angular/router';

import { LoginComponent } from './features/auth/components/login/login.component';
import { RegisterComponent } from './features/auth/components/register/register.component';
import { BookList } from './features/books/components/book-list/book-list.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { ProfilePageComponent } from './features/profile/pages/profile-page/profile-page.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegisterComponent },
  { path: 'biblioteca', component: BookList },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'perfil', component: ProfilePageComponent },
  { path: '**', redirectTo: 'login' }
];