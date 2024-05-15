import { Component, OnInit, ViewChild } from '@angular/core';
import { DbConfigComponent } from 'src/app/pages/system-configuration/db-config/db-config.component';

@Component({
  selector: 'app-system-configuration',
  templateUrl: './system-configuration.page.html',
  styleUrls: ['./system-configuration.page.css']
})
export class SystemConfigurationPage implements OnInit {

  @ViewChild(DbConfigComponent) dbConfigComponent!: DbConfigComponent;

  constructor() { }

  ngOnInit() {
  }

  public save(): void {
    this.dbConfigComponent.save();
  }

}
