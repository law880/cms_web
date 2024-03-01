import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbToast } from '@ng-bootstrap/ng-bootstrap';
import { ToastComponent } from './toast/toast.component';

@NgModule({
  declarations: [
    ToastComponent
  ],
  imports: [
    CommonModule,
    NgbToast
  ],
  exports: [
    ToastComponent
  ]
})
export class CoreModule { }
