import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-system-configuration',
  templateUrl: './system-configuration.page.html',
  styleUrls: ['./system-configuration.page.css']
})
export class SystemConfigurationPage implements OnInit {

  selectedTabIndex = new FormControl(0);

  constructor() { }

  ngOnInit() {
  }

}
