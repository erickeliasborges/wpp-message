import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WppMessageComponent } from './wpp-message.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from 'src/app/modules/material.module';

const routes: Routes = [
  { path: '', component: WppMessageComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
  ],
  declarations: [WppMessageComponent]
})
export class WppMessageModule { }
