import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-precedent',
  templateUrl: './precedent.component.html',
  styleUrls: ['./precedent.component.css']
})
export class PrecedentComponent {
  showWarning = true;
  showSuccess = true;
  showInfo = true;
  showError = true;

  hideAlert(alertType: string) {
    switch (alertType) {
      case 'warning':
        this.showWarning = false;
        break;
      case 'success':
        this.showSuccess = false;
        break;
      case 'info':
        this.showInfo = false;
        break;
      case 'error':
        this.showError = false;
        break;
      default:
        break;
    }
  }
}
