import { Component, ContentChild, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { CrudAPIService } from 'src/app/crud-page/components/crud/crud.service';
import { CrudFactory, GENERIC_CRUD } from 'src/app/crud-page/interfaces/crud-factory';
import { EntityId } from 'src/app/crud-page/interfaces/entity-id';
import { CRUD_FORM, FormFactory } from 'src/app/crud-page/interfaces/form-factory';

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

  constructor(
    private apiService: CrudAPIService<any>,
  ) { }

  newObj(args: any): Observable<any> {
    return new Observable(observer => {
      this.apiService.new(args).subscribe({
        next: (value) => {
          this.form.updateForm(value);
          observer.next(value);
          observer.complete();
          this.newEvent.emit(value);
        },
        error: (error) => {
          observer.error(error);
          observer.complete();
        }
      });
    })
  }

  create(): Observable<any> {
    // this.loadingController.showLoading();

    if (!this.form.validate()) {
      // this.loadingController.hideLoading();
      throw new Error('form inválido.');
    }
    this.form.updateRecord(this.record);
    return new Observable(observer => {
      this.apiService.create(this.record).subscribe({
        next: (value) => {
          observer.next(value);
          observer.complete();
          this.createEvent.emit(value);
        },
        error: (error) => {
          observer.error(error);
          observer.complete();
        }
      });
    });
  }

  read(id: any): Observable<any> {
    return new Observable(observer => {
      this.apiService.findById(id).subscribe({
        next: (value) => {
          observer.next(value);
          observer.complete();
          this.form.updateForm(value);
          this.record = value;
          this.readEvent.emit(value);
        },
        error: (error) => {
          observer.error(error);
          observer.complete();
        }
      });
    });
  }

  update(): Observable<any> {
    // this.loadingController.showLoading();

    if (!this.form.validate()) {
      // this.loadingController.hideLoading();
      throw new Error('form inválido.');
    }
    this.form.updateRecord(this.record);
    return new Observable(observer => {
      this.apiService.update(this.record).subscribe({
        next: (value) => {
          observer.next(value);
          observer.complete();
          this.updateEvent.emit(value);
        },
        error: (error) => {
          observer.error(error);
          observer.complete();
        }
      })
    });
  }

  delete(): Observable<boolean> {
    return new Observable(observer => {
      this.apiService.delete(this.record.id).subscribe({
        next: (value) => {
          observer.next(value);
          observer.complete();
          this.deleteEvent.emit(value);
        },
        error: (error) => {
          observer.error(error);
          observer.complete();
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