import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudComponent } from 'src/app/crud-page/components/crud/crud.component';
import { CrudPageComponent } from 'src/app/crud-page/crud-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CrudActionsComponent } from 'src/app/crud-page/components/crud/crud-actions/crud-actions.component';
import { CrudFooterComponent } from 'src/app/crud-page/components/crud/app-crud-footer/crud-footer.component';
import { MaterialModule } from 'src/app/modules/material/material.module';

const PUBLIC = [
  CrudPageComponent,
  CrudComponent,
  CrudFooterComponent,
  CrudActionsComponent,
];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
  ],
  declarations: [
    ...PUBLIC,
  ],
  exports: [
    ...PUBLIC,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ]
})
export class CrudPageModule { }
