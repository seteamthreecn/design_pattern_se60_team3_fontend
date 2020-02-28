import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertOutcomePage } from './insert-outcome.page';

describe('InsertOutcomePage', () => {
  let component: InsertOutcomePage;
  let fixture: ComponentFixture<InsertOutcomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertOutcomePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertOutcomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
