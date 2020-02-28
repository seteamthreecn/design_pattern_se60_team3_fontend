import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDataIncomePage } from './edit-data-income.page';

describe('EditDataIncomePage', () => {
  let component: EditDataIncomePage;
  let fixture: ComponentFixture<EditDataIncomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDataIncomePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDataIncomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
