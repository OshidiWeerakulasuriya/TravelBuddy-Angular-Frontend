import { Component } from '@angular/core';
import { HomepageNavbarComponent } from '../Partials/homepage-navbar/homepage-navbar.component';

@Component({
  selector: 'app-host-page',
  standalone: true,
  imports: [HomepageNavbarComponent],
  templateUrl: './host-page.component.html',
  styleUrl: './host-page.component.css'
})
export class HostPageComponent {

}
