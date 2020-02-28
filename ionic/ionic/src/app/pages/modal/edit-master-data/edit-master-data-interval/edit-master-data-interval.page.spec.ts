import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMasterDataIntervalPage } from './edit-master-data-interval.page';

describe('EditMasterDataIntervalPage', () => {
  let component: EditMasterDataIntervalPage;
  let fixture: ComponentFixture<EditMasterDataIntervalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMasterDataIntervalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMasterDataIntervalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
