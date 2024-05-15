/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WppSessionConfigComponent } from './wpp-session-config.component';

describe('WppSessionConfigComponent', () => {
  let component: WppSessionConfigComponent;
  let fixture: ComponentFixture<WppSessionConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WppSessionConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WppSessionConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
