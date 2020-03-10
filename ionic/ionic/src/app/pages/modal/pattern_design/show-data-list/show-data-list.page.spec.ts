import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDataListPage } from './show-data-list.page';

describe('ShowDataListPage', () => {
  let component: ShowDataListPage;
  let fixture: ComponentFixture<ShowDataListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowDataListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDataListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
