import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'portfolio';

  constructor(private router: Router) {} // Inject the Router

  ngOnInit(): void {
    // Route to home page using routerLink
    this.router.navigate(['/home']);
  }
}
