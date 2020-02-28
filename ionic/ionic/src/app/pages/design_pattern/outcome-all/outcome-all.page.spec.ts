import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutcomeAllPage } from './outcome-all.page';

describe('OutcomeAllPage', () => {
  let component: OutcomeAllPage;
  let fixture: ComponentFixture<OutcomeAllPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutcomeAllPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutcomeAllPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
