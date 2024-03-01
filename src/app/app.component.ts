import { Component } from '@angular/core';

import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'cms_web';
  //authenticated = false;
  
  constructor() {}

  //ngOnInit() {
    //this.authService.isAuthenticated$.subscribe(authenticated => this.authenticated = authenticated);
  //}
}
