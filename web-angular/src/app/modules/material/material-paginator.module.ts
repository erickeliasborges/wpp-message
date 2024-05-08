import { NgModule } from '@angular/core';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

const getCustomPaginatorConfig = () => {
  const customPaginatorIntl = new MatPaginatorIntl();
  customPaginatorIntl.itemsPerPageLabel = 'Itens por página:';
  return customPaginatorIntl;
}

@NgModule({
  declarations: [],
  imports: [
    MatPaginatorModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  exports: [
    MatPaginatorModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  providers: [
    { provide: MatPaginatorIntl, useValue: getCustomPaginatorConfig() }
  ],
})
export class MaterialPaginatorModule { }
