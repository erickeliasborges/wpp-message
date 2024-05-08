import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CrudAPIService } from 'src/app/crud-page/components/crud/crud.service';
import { Message } from 'src/app/pages/message/models/message';

@Injectable()
export class MessageService extends CrudAPIService<Message> {

  constructor(
    public override http: HttpClient,
  ) {
    super('message', http);
  }

}
