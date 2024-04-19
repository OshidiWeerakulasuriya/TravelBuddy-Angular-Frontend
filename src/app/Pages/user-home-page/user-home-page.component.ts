import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HomepageNavbarComponent } from '../Partials/homepage-navbar/homepage-navbar.component';

@Component({
  selector: 'app-user-home-page',
  standalone: true,
  imports: [HomepageNavbarComponent],
  templateUrl: './user-home-page.component.html',
  styleUrl: './user-home-page.component.css'
})
export class UserHomePageComponent {
  constructor(private router: Router) {}

  // Method to check if it's the homepage
  // isHomePage(): boolean {
  //   return this.router.url === '/user-home'; // Assuming '/' is your homepage URL
  // }

}
