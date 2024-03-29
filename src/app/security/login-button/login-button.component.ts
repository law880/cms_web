import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.sass']
})
export class LoginButtonComponent {
  constructor(private authService: AuthService) {}

  login() {
    this.authService.loginWithRedirect();
  }
}
