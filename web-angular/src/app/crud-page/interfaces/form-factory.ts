import { InjectionToken } from "@angular/core";

export const CRUD_FORM = new InjectionToken<FormFactory<any>>('crud-form');

export interface FormFactory<T> {
    updateRecord(record: T): void;
    updateForm(record: T): void;
    validate(): boolean;
    isDirty(): boolean;
}
