import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDataIncomePage } from './show-data-income.page';

describe('ShowDataIncomePage', () => {
  let component: ShowDataIncomePage;
  let fixture: ComponentFixture<ShowDataIncomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowDataIncomePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDataIncomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
