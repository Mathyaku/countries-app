import { Injectable } from '@angular/core';
import { ToastrService } from "ngx-toastr";

@Injectable()
export class NotificationService {

  constructor(private toastr: ToastrService) { }

  notifyMessage(notificationType: string, message: string) {
    switch(notificationType) {
      case 'error':
        this.toastr.error(message, 'Error', {
          tapToDismiss: false,
          closeButton: true
        });
        break;
      case 'success':
        this.toastr.success(message, 'Success', {
          tapToDismiss: false,
          closeButton: true
        });
        break;
      case 'warning':
        this.toastr.warning(message, 'Warning', {
          tapToDismiss: false,
          closeButton: true
        });
        break;
      case 'info':
        this.toastr.info(message, 'Info', {
          tapToDismiss: false,
          closeButton: true
        });
        break;
    }
  }
}
