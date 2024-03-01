import { Injectable } from '@angular/core';

export interface Toast {
  header: string;
  body: string;
  delay: number | undefined;
  classNames?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  toastList: Toast[] = [];

  show(header: string, body: string, delay: number = 0, classNames = '') {
    this.toastList.push({header, body, delay, classNames});
  }

  remove(toast: Toast) {
    this.toastList = this.toastList.filter(t => t != toast);
  }

}
