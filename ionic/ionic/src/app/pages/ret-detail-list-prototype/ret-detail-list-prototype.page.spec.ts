import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetDetailListPrototypePage } from './ret-detail-list-prototype.page';

describe('RetDetailListPrototypePage', () => {
  let component: RetDetailListPrototypePage;
  let fixture: ComponentFixture<RetDetailListPrototypePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetDetailListPrototypePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetDetailListPrototypePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
