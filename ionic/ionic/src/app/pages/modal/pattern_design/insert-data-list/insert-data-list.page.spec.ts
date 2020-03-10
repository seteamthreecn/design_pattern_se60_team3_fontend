import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertDataListPage } from './insert-data-list.page';

describe('InsertDataListPage', () => {
  let component: InsertDataListPage;
  let fixture: ComponentFixture<InsertDataListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertDataListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertDataListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
