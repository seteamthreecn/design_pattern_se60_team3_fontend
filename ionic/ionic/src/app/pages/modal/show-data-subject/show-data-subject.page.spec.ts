import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDataSubjectPage } from './show-data-subject.page';

describe('ShowDataSubjectPage', () => {
  let component: ShowDataSubjectPage;
  let fixture: ComponentFixture<ShowDataSubjectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowDataSubjectPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDataSubjectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
