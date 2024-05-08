import { Component } from '@angular/core';
import { provideCrud } from 'src/app/crud-page/components/crud/core/provide-crud';
import { MessageService } from 'src/app/pages/message/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['./message.page.css'],
  providers: [
    ...provideCrud(MessageService),
  ]
})
export class MessagePage {

  constructor() {
  }

}
