import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer, MatDrawerContainer } from '@angular/material/sidenav';
import { DrawerService } from 'src/app/components/main-menu/services/drawer.service';

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
  ) {
  }

  ngOnInit() {
    this.sidenavService.setDrawer(this.drawer);
    this.sidenavService.matDrawerContainer = this.drawerContainer;
  }

}
