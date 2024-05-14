import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CrudAPIService } from 'src/app/crud-page/components/crud/crud.service';
import { Message } from 'src/app/pages/message/models/message';
import { GenericResponse } from 'src/app/responses/generic-response';

@Injectable()
export class MessageApiService extends CrudAPIService<Message> {

  constructor(
    public override http: HttpClient,
  ) {
    super('message', http);
  }

  public sendMessageWpp(id: number): Observable<GenericResponse> {
    return this.http.get<GenericResponse>(`${this.fullUrl}/wpp/send/${id}`);
  }

}
