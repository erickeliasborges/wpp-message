import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainMenuComponent } from './main-menu.component';

import { RouterModule, Routes } from '@angular/router';
import { DrawerService } from 'src/app/core/main-menu/services/drawer.service';
import { SystemConfigurationModule } from 'src/app/pages/system-configuration/system-configuration.module';
import { MaterialModule } from 'src/app/core/modules/material/material.module';

const routes: Routes = [
  {
      path: '',
      component: MainMenuComponent,
      children: [
        { path: 'wpp-message', loadChildren: () => import('../../pages/message/message.module').then(mod => mod.MessageModule) },
      ]
  },
];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
    SystemConfigurationModule,
  ],
  declarations: [MainMenuComponent],
  providers: [
    DrawerService,
  ],
})
export class MainMenuModule { }
