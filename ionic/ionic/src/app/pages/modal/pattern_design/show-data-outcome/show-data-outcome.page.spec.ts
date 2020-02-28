import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDataOutcomePage } from './show-data-outcome.page';

describe('ShowDataOutcomePage', () => {
  let component: ShowDataOutcomePage;
  let fixture: ComponentFixture<ShowDataOutcomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowDataOutcomePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDataOutcomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
