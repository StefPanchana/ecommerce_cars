/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PagClientListComponent } from './pagClientList.component';

describe('PagClientListComponent', () => {
  let component: PagClientListComponent;
  let fixture: ComponentFixture<PagClientListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagClientListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagClientListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
