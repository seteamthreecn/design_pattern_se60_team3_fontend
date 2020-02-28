import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProfliePage } from './edit-proflie.page';

describe('EditProfliePage', () => {
  let component: EditProfliePage;
  let fixture: ComponentFixture<EditProfliePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProfliePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProfliePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
