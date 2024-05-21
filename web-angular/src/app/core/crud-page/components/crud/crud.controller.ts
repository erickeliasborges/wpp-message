import { Injectable } from "@angular/core";
import { CrudFactory } from "src/app/core/crud-page/interfaces/crud-factory";
import { FormFactory } from "src/app/core/crud-page/interfaces/form-factory";

@Injectable()
export class CrudController {

  public crudContext!: CrudFactory<any>;

  public registerContext(crudContext: CrudFactory<any>) {
    this.crudContext = crudContext;
  }

  public get form(): FormFactory<any> {
    return this.crudContext.form;
  }

}
