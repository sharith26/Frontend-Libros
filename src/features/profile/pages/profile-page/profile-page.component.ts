import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NavbarComponent } from '../../../../app/shared/components/navbar/navbar.component';
@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [RouterLink, NavbarComponent],
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent {

  totalLibros = 500;

  constructor(private router: Router) {}

  salir() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}