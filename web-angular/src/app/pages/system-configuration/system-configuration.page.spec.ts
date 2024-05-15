/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SystemConfigurationPage } from './system-configuration.page';

describe('SystemConfiguration.pageComponent', () => {
  let component: SystemConfigurationPage;
  let fixture: ComponentFixture<SystemConfigurationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemConfigurationPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemConfigurationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
