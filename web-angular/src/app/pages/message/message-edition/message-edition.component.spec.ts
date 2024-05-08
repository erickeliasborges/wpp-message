/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MessageEditionComponent } from './message-edition.component';

describe('MessageEditionComponent', () => {
  let component: MessageEditionComponent;
  let fixture: ComponentFixture<MessageEditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageEditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
