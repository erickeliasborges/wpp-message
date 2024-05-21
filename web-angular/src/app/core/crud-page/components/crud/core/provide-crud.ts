import { Provider, Type } from '@angular/core';
import { CrudController } from 'src/app/core/crud-page/components/crud/crud.controller';
import { CrudAPIService } from 'src/app/core/crud-page/components/crud/crud.service';

export function provideCrud(apiService: Type<any>): Provider[] {
    return [
        apiService,
        {
            provide: CrudAPIService,
            useClass: apiService,
        },
        CrudController,
    ];
}
