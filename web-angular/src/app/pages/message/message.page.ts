import { Component, ViewChild } from '@angular/core';
import { provideCrud } from 'src/app/crud-page/components/crud/core/provide-crud';
import { MessageApiService } from 'src/app/pages/message/message-api.service';
import { MessageService } from 'src/app/services/message.service';
import { CrudComponent } from 'src/app/crud-page/components/crud/crud.component';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['./message.page.css'],
  providers: [
    ...provideCrud(MessageApiService),
    MessageApiService,
  ]
})
export class MessagePage {

  @ViewChild(CrudComponent, { static: true }) crudComponent!: CrudComponent;

  constructor(
    private messageApiService: MessageApiService,
    private messageService: MessageService,
    private loadingService: LoadingService,
  ) {
  }

  public onSendMessageClick(): void {
    if (this.crudComponent.record?.id) {
      this.loadingService.loadingOn();
      this.messageApiService.sendMessageWpp(this.crudComponent.record.id).subscribe({
        next: (value) => {
          this.messageService.showMessage(value.message, { type: 'success' });
          this.loadingService.loadingOff();
        },
        error: (error) => {
          this.messageService.showHttpErrorMessage('Erro ao enviar mensagem via WhatsApp.', error);
          this.loadingService.loadingOff();
        },
      });
    }
  }

}
