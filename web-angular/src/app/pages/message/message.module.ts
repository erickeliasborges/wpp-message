import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagePage } from './message.page';
import { MessageSearchComponent } from 'src/app/pages/message/message-search/message-search.component';
import { MessageEditionComponent } from 'src/app/pages/message/message-edition/message-edition.component';
import { RouterModule, Routes } from '@angular/router';
import { CrudPageModule } from 'src/app/core/crud-page/crud-page.module';
import { MessageApiService } from 'src/app/pages/message/message-api.service';
import { GenericDirectivesModule } from 'src/app/common/generic-directives/generic-directives.module';
import { MaterialModule } from 'src/app/core/modules/material/material.module';

const routes: Routes = [
  { path: '', redirectTo: 'search', pathMatch: 'full' },
  { path: ':action', component: MessagePage },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    CrudPageModule,
    GenericDirectivesModule,
  ],
  declarations: [
    MessagePage,
    MessageSearchComponent,
    MessageEditionComponent,
  ],
  providers: [
    MessageApiService,
  ]
})
export class MessageModule { }
