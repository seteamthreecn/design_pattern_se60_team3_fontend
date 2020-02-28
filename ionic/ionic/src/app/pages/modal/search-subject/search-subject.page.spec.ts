import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSubjectPage } from './search-subject.page';

describe('SearchSubjectPage', () => {
  let component: SearchSubjectPage;
  let fixture: ComponentFixture<SearchSubjectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchSubjectPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchSubjectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
