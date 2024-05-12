import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private defaultConfig: MatSnackBarConfig = {
    horizontalPosition: 'end',
    verticalPosition: 'top',
    duration: 50000,
  };

  constructor(
    private snackBar: MatSnackBar,
  ) { }

  public showMessage(message: string, options?: { type: 'success' | 'error' }) {
    switch (options?.type) {
      case 'success': {
        this.snackBar.open(message, 'OK', { ...this.defaultConfig, panelClass: 'success-snackbar' });
        return;
      }
      case 'error': {
        this.snackBar.open(message, 'OK', { ...this.defaultConfig, panelClass: 'error-snackbar' });
        return;
      }
      default: {
        this.snackBar.open(message, 'OK', this.defaultConfig);
        return;
      }
    }
  }

}
