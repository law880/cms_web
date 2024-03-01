import { Component } from '@angular/core';
import { AuthService, User } from '@auth0/auth0-angular';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.sass']
})
export class UserProfileComponent {
  constructor(private authService: AuthService) {}

  user: User | undefined;

  ngOnInit() {
    this.authService.user$.subscribe((user) => {
      if(user) {
        this.user = user
      }
    });
  }
}
