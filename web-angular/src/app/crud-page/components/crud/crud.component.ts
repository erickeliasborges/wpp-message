import { HttpErrorResponse } from '@angular/common/http';
import { Component, ContentChild, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { CrudAPIService } from 'src/app/crud-page/components/crud/crud.service';
import { CrudFactory, GENERIC_CRUD } from 'src/app/crud-page/interfaces/crud-factory';
import { EntityId } from 'src/app/crud-page/interfaces/entity-id';
import { CRUD_FORM, FormFactory } from 'src/app/crud-page/interfaces/form-factory';
import { LoadingService } from 'src/app/services/loading.service';
import { MessageService, OptionsMessage } from 'src/app/services/message.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss'],
  providers: [
    { provide: GENERIC_CRUD, useExisting: CrudComponent },
  ],
})
export class CrudComponent implements CrudFactory<any> {

  public record: EntityId<any> = { id: null };

  @ContentChild(CRUD_FORM) public form!: FormFactory<any>;

  private _showMessages: boolean = true;

  constructor(
    private apiService: CrudAPIService<any>,
    private messageService: MessageService,
    private loadingService: LoadingService,
  ) { }

  public set showMessages(value: boolean) {
    this._showMessages = value;
  }

  private clearRecord(): void {
    this.record = { id: null };
  }

  private showMessage(message: string, options: OptionsMessage, error?: HttpErrorResponse): void {
    if (!this._showMessages) {
      return;
    }
    if (error) {
      this.messageService.showHttpErrorMessage(message, error);
    }
    this.messageService.showMessage(message, options);
  }

  newObj(args: any): Observable<any> {
    return new Observable(observer => {
      this.apiService.new(args).subscribe({
        next: (value) => {
          this.clearRecord();
          this.form.updateForm(value);
          observer.next(value);
          observer.complete();
          this.newEvent.emit(value);
        },
        error: (error) => {
          this.showMessage('Erro ao iniciar novo registro.', error);
          observer.error(error);
          observer.complete();
        }
      });
    })
  }

  create(): Observable<any> {
    if (!this.form.validate()) {
      throw new Error('form inválido.');
    }
    this.form.updateRecord(this.record);
    this.loadingService.loadingOn();
    return new Observable(observer => {
      this.apiService.create(this.record).subscribe({
        next: (value) => {
          this.loadingService.loadingOff();
          this.showMessage('Registro criado com sucesso.', { type: 'success' });
          this.record = value;
          observer.next(value);
          observer.complete();
          this.createEvent.emit(value);
          this.loadingService.loadingOff();
        },
        error: (error) => {
          this.loadingService.loadingOff();
          this.showMessage('Erro ao criar registro.', error);
          observer.error(error);
        }
      });
    });
  }

  read(id: any): Observable<any> {
    this.loadingService.loadingOn();
    return new Observable(observer => {
      this.apiService.findById(id).subscribe({
        next: (value) => {
          this.loadingService.loadingOff();
          this.record = value;
          observer.next(value);
          observer.complete();
          this.form.updateForm(value);
          this.readEvent.emit(value);
        },
        error: (error) => {
          this.loadingService.loadingOff();
          this.showMessage('Erro ao buscar registro.', error);
          observer.error(error);
          observer.complete();
        }
      });
    });
  }

  update(): Observable<any> {
    if (!this.form.validate()) {
      throw new Error('form inválido.');
    }
    this.form.updateRecord(this.record);
    this.loadingService.loadingOn();
    return new Observable(observer => {
      this.apiService.update(this.record).subscribe({
        next: (value) => {
          this.loadingService.loadingOff();
          this.showMessage('Registro salvo com sucesso.', { type: 'success' });
          this.record = value;
          observer.next(value);
          observer.complete();
          this.updateEvent.emit(value);
        },
        error: (error) => {
          this.loadingService.loadingOff();
          this.showMessage('Erro ao atualizar registro.', error);
          observer.error(error);
        }
      })
    });
  }

  delete(): Observable<boolean> {
    this.loadingService.loadingOn();
    return new Observable(observer => {
      this.apiService.delete(this.record.id).subscribe({
        next: (value) => {
          this.loadingService.loadingOff();
          this.showMessage('Registro deletado com sucesso.', { type: 'success' });
          this.clearRecord();
          observer.next(value);
          observer.complete();
          this.deleteEvent.emit(value);
        },
        error: (error) => {
          this.loadingService.loadingOff();
          this.showMessage('Erro ao deletar registro.', error);
          observer.error(error);
        }
      })
    });
  }

  public get createEvent(): EventEmitter<any> {
    return new EventEmitter();
  }

  public get updateEvent(): EventEmitter<any> {
    return new EventEmitter();
  }

  public get deleteEvent(): EventEmitter<any> {
    return new EventEmitter();
  }

  public get newEvent(): EventEmitter<any> {
    return new EventEmitter();
  }

  public get readEvent(): EventEmitter<any> {
    return new EventEmitter();
  }

}
