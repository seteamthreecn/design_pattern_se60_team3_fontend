import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDataOutcomePage } from './edit-data-outcome.page';

describe('EditDataOutcomePage', () => {
  let component: EditDataOutcomePage;
  let fixture: ComponentFixture<EditDataOutcomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDataOutcomePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDataOutcomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
