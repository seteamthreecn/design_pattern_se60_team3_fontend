import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetDetailListPage } from './ret-detail-list.page';

describe('RetDetailListPage', () => {
  let component: RetDetailListPage;
  let fixture: ComponentFixture<RetDetailListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetDetailListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetDetailListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
