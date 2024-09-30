import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  searchQuery: string = '';

  constructor(private router: Router) {}

  onSearch() {
    if (this.searchQuery.trim()) {
      // Navigate to a search results page or filter notes based on the search query
      // For example, you could navigate to a search results component
      this.router.navigate(['/search'], { queryParams: { query: this.searchQuery } });
    }
  }
}