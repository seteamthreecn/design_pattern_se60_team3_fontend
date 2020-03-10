import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDataListPage } from './edit-data-list.page';

describe('EditDataListPage', () => {
  let component: EditDataListPage;
  let fixture: ComponentFixture<EditDataListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDataListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDataListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
