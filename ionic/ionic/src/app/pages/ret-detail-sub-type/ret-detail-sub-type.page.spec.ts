import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetDetailSubTypePage } from './ret-detail-sub-type.page';

describe('RetDetailSubTypePage', () => {
  let component: RetDetailSubTypePage;
  let fixture: ComponentFixture<RetDetailSubTypePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetDetailSubTypePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetDetailSubTypePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
