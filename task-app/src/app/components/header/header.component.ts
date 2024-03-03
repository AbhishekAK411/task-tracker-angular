import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isOpen: boolean = false;

  constructor(
    private router: Router
  ) {
    
  }

  redirectHome() {
    this.router.navigate(['/']);
  }
  
  toggleDropdown() {
    this.isOpen = !this.isOpen;
    
  }
}
