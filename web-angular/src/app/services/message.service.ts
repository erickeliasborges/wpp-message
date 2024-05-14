import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { errorTransform } from 'src/app/pipes/error-transform';

export interface OptionsMessage {
  type: 'success' | 'error';
}

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private defaultConfig: MatSnackBarConfig = {
    horizontalPosition: 'end',
    verticalPosition: 'top',
    duration: 5000,
  };

  constructor(
    private snackBar: MatSnackBar,
  ) { }

  public showMessage(message: string, options?: OptionsMessage) {
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

  public showHttpErrorMessage(title: string, error: HttpErrorResponse) {
    this.showMessage(`${title}: ${errorTransform(error)}`, { type: 'error' });
  }

}
