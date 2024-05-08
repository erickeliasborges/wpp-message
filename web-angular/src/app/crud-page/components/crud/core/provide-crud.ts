import { Provider, Type } from '@angular/core';
import { CrudAPIService } from 'src/app/crud-page/components/crud/crud.service';

export function provideCrud(apiService: Type<any>): Provider[] {
    return [
        apiService,
        {
            provide: CrudAPIService,
            useClass: apiService,
        },
    ];
}
