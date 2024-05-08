import { EventEmitter, InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { EntityId } from 'src/app/crud-page/interfaces/entity-id';
import { FormFactory } from 'src/app/crud-page/interfaces/form-factory';

export const GENERIC_CRUD = new InjectionToken<CrudFactory<any>>('generic-crud');

export interface CrudFactory<T extends EntityId<any>> {
    record: T;
    form: FormFactory<T>;
    createEvent: EventEmitter<T>;
    readEvent: EventEmitter<T>;
    updateEvent: EventEmitter<T>;
    deleteEvent: EventEmitter<boolean>;
    newEvent: EventEmitter<T>;
    create(): Observable<T>;
    read(id: any): Observable<T>;
    update(): Observable<T>;
    delete(): Observable<boolean>;
    newObj(args?: any): Observable<T>;
}
