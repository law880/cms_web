import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModule } from '@auth0/auth0-angular';
import { LoginButtonComponent } from './login-button/login-button.component';
import { LogoutButtonComponent } from './logout-button/logout-button.component';
import { AuthButtonComponent } from './auth-button/auth-button.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const authConfig = {
  domain: 'dev-3vogg214p37yk3ma.au.auth0.com',
  clientId: '3FcVPQaupxetLKlhFoq3dETFIbY3Zydc'
}

@NgModule({
  declarations: [
    LoginButtonComponent,
    LogoutButtonComponent,
    AuthButtonComponent,
    UserProfileComponent
  ],
  imports: [
    CommonModule,
    AuthModule.forRoot(authConfig),
    NgbModule
  ],
  exports: [
    AuthModule,
    AuthButtonComponent,
    UserProfileComponent
  ]
})
export class SecurityModule { }
