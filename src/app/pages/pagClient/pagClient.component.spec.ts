/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PagClientComponent } from './pagClient.component';

describe('PagClientComponent', () => {
  let component: PagClientComponent;
  let fixture: ComponentFixture<PagClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
