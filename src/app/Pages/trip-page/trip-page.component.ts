import { Component } from '@angular/core';
import { HomepageNavbarComponent } from '../Partials/homepage-navbar/homepage-navbar.component';

@Component({
  selector: 'app-trip-page',
  standalone: true,
  imports: [HomepageNavbarComponent],
  templateUrl: './trip-page.component.html',
  styleUrl: './trip-page.component.css'
})
export class TripPageComponent {

}
