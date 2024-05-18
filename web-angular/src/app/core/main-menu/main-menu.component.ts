import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDrawer, MatDrawerContainer } from '@angular/material/sidenav';
import { DrawerService } from 'src/app/core/main-menu/services/drawer.service';
import { SystemConfigurationPage } from 'src/app/pages/system-configuration/system-configuration.page';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  @ViewChild('drawer', {static: true}) public drawer!: MatDrawer;
  @ViewChild('drawerContainer', {static: true}) public drawerContainer!: MatDrawerContainer;

  constructor(
    private sidenavService: DrawerService,
    public dialog: MatDialog,
  ) {
  }

  ngOnInit() {
    this.sidenavService.setDrawer(this.drawer);
    this.sidenavService.matDrawerContainer = this.drawerContainer;
  }

  public onSettingsClick(): void {
    this.openSystemSettings();
  }

  private openSystemSettings(): void {
    this.dialog.open(SystemConfigurationPage);
  }

  public onLogoutClick(): void {
    // TODO
  }

}
