/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PagCarListComponent } from './pagCarList.component';

describe('PagCarListComponent', () => {
  let component: PagCarListComponent;
  let fixture: ComponentFixture<PagCarListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagCarListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagCarListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
