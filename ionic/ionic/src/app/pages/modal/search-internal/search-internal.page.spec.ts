import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchInternalPage } from './search-internal.page';

describe('SearchInternalPage', () => {
  let component: SearchInternalPage;
  let fixture: ComponentFixture<SearchInternalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchInternalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchInternalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
