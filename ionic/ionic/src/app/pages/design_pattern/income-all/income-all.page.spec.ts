import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeAllPage } from './income-all.page';

describe('IncomeAllPage', () => {
  let component: IncomeAllPage;
  let fixture: ComponentFixture<IncomeAllPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncomeAllPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomeAllPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
