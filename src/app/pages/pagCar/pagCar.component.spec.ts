/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PagCarComponent } from './pagCar.component';

describe('PagCarComponent', () => {
  let component: PagCarComponent;
  let fixture: ComponentFixture<PagCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagCarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
