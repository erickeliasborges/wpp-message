import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SystemConfigurationPage } from 'src/app/pages/system-configuration/system-configuration.page';
import { DbConfigComponent } from 'src/app/pages/system-configuration/db-config/db-config.component';
import { WppSessionConfigComponent } from 'src/app/pages/system-configuration/wpp-session-config/wpp-session-config.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PipesUtilsModule } from 'src/app/common/pipes/pipes-utils.module';
import { DbConfigService } from 'src/app/pages/system-configuration/db-config/db-config.service';
import { MaterialModule } from 'src/app/core/modules/material/material.module';
import { WppConnectAPIAuthService } from 'src/app/api/wpp-connect-api-auth.service';

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
    WppConnectAPIAuthService,
  ]
})
export class SystemConfigurationModule { }
