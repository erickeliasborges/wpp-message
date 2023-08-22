import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainMenuComponent } from './main-menu.component';

import { MaterialModule } from 'src/app/modules/material.module';
import { RouterModule, Routes } from '@angular/router';
import { DrawerService } from 'src/app/components/main-menu/services/drawer.service';

const routes: Routes = [
  {
      path: '',
      component: MainMenuComponent,
      children: [
        { path: 'wpp-message', loadChildren: () => import('../../pages/wpp-message/wpp-message.module').then(mod => mod.WppMessageModule) },
      ]
  },
];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MainMenuComponent],
  providers: [
    DrawerService,
  ],
})
export class MainMenuModule { }
