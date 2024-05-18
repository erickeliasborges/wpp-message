import { Component, OnInit } from '@angular/core';
import { WppConnectAPIAuthService } from 'src/app/api/wpp-connect-api-auth.service';
import { LoadingService } from 'src/app/common/components/loading-indicator/loading.service';
import { MessageService } from 'src/app/common/services/message.service';

@Component({
  selector: 'app-wpp-session-config',
  templateUrl: './wpp-session-config.component.html',
  styleUrls: ['./wpp-session-config.component.scss']
})
export class WppSessionConfigComponent implements OnInit {

  public sessionConnected: boolean = false;
  public qrcode: string = '';

  constructor(
    private wppConnectAPIAuthService: WppConnectAPIAuthService,
    private messageService: MessageService,
    private loadingService: LoadingService,
  ) {
    this.checkConnectionSession();
  }

  ngOnInit() {
  }

  private checkConnectionSession(): void {
    this.loadingService.loadingOn();
    this.wppConnectAPIAuthService.checkConnectionSession().subscribe({
      next: (value) => {
        this.loadingService.loadingOff();
        this.sessionConnected = value.status || false;
      },
      error: (error) => {
        this.loadingService.loadingOff();
        this.messageService.showHttpErrorMessage('Erro ao checar conexão da sessão.', error);
      },
    });
  }

  public onRefreshStatusClick(): void {
    this.checkConnectionSession();
  }

  public startSession(): void {
    this.loadingService.loadingOn();
    this.wppConnectAPIAuthService.startSession().subscribe({
      next: (value) => {
        this.loadingService.loadingOff();
        if (value.qrcode) {
          this.qrcode = (value.qrcode.startsWith('data:image/png;base64,') ? '' : 'data:image/png;base64,') + value.qrcode;
        } else {
          this.qrcode = '';
        }
      },
      error: (error) => {
        this.loadingService.loadingOff();
        this.messageService.showHttpErrorMessage('Erro ao iniciar sessão.', error);
      },
    });
  }

  public closeSession(): void {
    this.loadingService.loadingOn();
    this.wppConnectAPIAuthService.closeSession().subscribe({
      next: (value) => {
        this.loadingService.loadingOff();
        this.messageService.showMessage('Sessão fechada com sucesso.', { type: 'success' });
        this.sessionConnected = !value.status;
        this.qrcode = '';
      },
      error: (error) => {
        this.loadingService.loadingOff();
        this.messageService.showHttpErrorMessage('Erro ao fechar sessão.', error);
      },
    });
  }

  public logoutSession(): void {
    this.loadingService.loadingOn();
    this.wppConnectAPIAuthService.logoutSession().subscribe({
      next: (value) => {
        this.loadingService.loadingOff();
        this.messageService.showMessage('Sessão desconectada com sucesso.', { type: 'success' });
        this.sessionConnected = !value.status;
        this.qrcode = '';
      },
      error: (error) => {
        this.loadingService.loadingOff();
        this.messageService.showHttpErrorMessage('Erro ao deslogar sessão.', error);
      },
    });
  }

}
