import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertSubjectPage } from './insert-subject.page';

describe('InsertSubjectPage', () => {
  let component: InsertSubjectPage;
  let fixture: ComponentFixture<InsertSubjectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertSubjectPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertSubjectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
