import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-auth-button',
  templateUrl: './auth-button.component.html',
  styleUrls: ['./auth-button.component.sass']
})
export class AuthButtonComponent {
  constructor(private authService: AuthService) {}

  isAuthenticated = false;

  ngOnInit() {
    this.authService.isAuthenticated$.subscribe((authenticated) => {
      if(!authenticated) {
        this.isAuthenticated = false;
      }
      else {
        this.isAuthenticated = true;
      }
    })
  }
}
