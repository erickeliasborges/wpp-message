import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SystemConfigurationPage } from 'src/app/pages/system-configuration/system-configuration.page';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { DbConfigComponent } from 'src/app/pages/system-configuration/db-config/db-config.component';
import { WppSessionConfigComponent } from 'src/app/pages/system-configuration/wpp-session-config/wpp-session-config.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PipesUtilsModule } from 'src/app/pipes/pipes-utils.module';
import { DbConfigService } from 'src/app/pages/system-configuration/db-config/db-config.service';

@NgModule({
  declarations: [
    SystemConfigurationPage,
    DbConfigComponent,
    WppSessionConfigComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    PipesUtilsModule,
  ],
  providers: [
    DbConfigService,
  ]
})
export class SystemConfigurationModule { }
