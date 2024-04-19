import { Component } from '@angular/core';
import { HomepageNavbarComponent } from '../Partials/homepage-navbar/homepage-navbar.component';

@Component({
  selector: 'app-blog-page',
  standalone: true,
  imports: [HomepageNavbarComponent],
  templateUrl: './blog-page.component.html',
  styleUrl: './blog-page.component.css'
})
export class BlogPageComponent {

}
