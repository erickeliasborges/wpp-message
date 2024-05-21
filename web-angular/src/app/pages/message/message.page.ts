import { Component, Inject, ViewChild } from '@angular/core';
import { provideCrud } from 'src/app/core/crud-page/components/crud/core/provide-crud';
import { MessageApiService } from 'src/app/pages/message/message-api.service';
import { MessageService } from 'src/app/common/services/message.service';
import { CrudComponent } from 'src/app/core/crud-page/components/crud/crud.component';
import { LoadingService } from 'src/app/common/components/loading-indicator/loading.service';
import { CrudFactory, GENERIC_CRUD } from 'src/app/core/crud-page/interfaces/crud-factory';
import { Message } from 'src/app/pages/message/models/message';
import { CrudController } from 'src/app/core/crud-page/components/crud/crud.controller';

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
    private crudController: CrudController,
  ) {
  }

  public onSendMessageClick(): void {
    if (!this.crudComponent.record?.id || !this.validateDirtyFormBeforeSendMessage()) {
      return;
    }
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

  private validateDirtyFormBeforeSendMessage(): boolean {
    return !this.crudController.form.isDirty() ||
      window.confirm('Você possui alterações pendentes, deseja mesmo enviar a mensagem?');
  }

}
