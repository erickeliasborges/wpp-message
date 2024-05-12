import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudComponent } from 'src/app/crud-page/components/crud/crud.component';
import { CrudPageComponent } from 'src/app/crud-page/crud-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CrudActionsComponent } from 'src/app/crud-page/components/crud/crud-actions/crud-actions.component';
import { CrudFooterComponent } from 'src/app/crud-page/components/crud/app-crud-footer/crud-footer.component';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { CrudSearchComponent } from 'src/app/crud-page/components/search/crud-search.component';
import { CrudSearchFooterComponent } from 'src/app/crud-page/components/search/crud-search-footer/crud-search-footer.component';
import { CrudSearchActionsComponent } from 'src/app/crud-page/components/search/crud-search-actions/crud-search-actions.component';
import { PipesUtilsModule } from 'src/app/pipes/pipes-utils.module';

const PUBLIC = [
  CrudPageComponent,
  CrudSearchComponent,
  CrudSearchFooterComponent,
  CrudSearchActionsComponent,
  CrudComponent,
  CrudFooterComponent,
  CrudActionsComponent,
];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    PipesUtilsModule,
  ],
  declarations: [
    ...PUBLIC,
  ],
  exports: [
    ...PUBLIC,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    PipesUtilsModule,
  ]
})
export class CrudPageModule { }
