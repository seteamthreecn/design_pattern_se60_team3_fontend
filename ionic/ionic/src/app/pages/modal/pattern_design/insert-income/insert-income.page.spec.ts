import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertIncomePage } from './insert-income.page';

describe('InsertIncomePage', () => {
  let component: InsertIncomePage;
  let fixture: ComponentFixture<InsertIncomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertIncomePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertIncomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
