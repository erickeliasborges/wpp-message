import { DbConfig } from './models/db-config';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CrudAPIService } from 'src/app/crud-page/components/crud/crud.service';
import { GenericResponse } from 'src/app/responses/generic-response';

@Injectable()
export class DbConfigService extends CrudAPIService<DbConfig> {

  constructor(
    public override http: HttpClient,
  ) {
    super('db-config', http);
  }

  public default(): Observable<DbConfig> {
    return this.http.get<DbConfig>(`${this.fullUrl}/default`);
  }

  public connectionTest(dbConfig: DbConfig): Observable<GenericResponse> {
    return this.http.post<GenericResponse>(`${this.fullUrl}/connection/test`, dbConfig);
  }

}
