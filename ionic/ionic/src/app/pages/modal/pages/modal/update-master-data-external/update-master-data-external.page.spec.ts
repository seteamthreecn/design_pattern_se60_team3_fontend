import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMasterDataExternalPage } from './update-master-data-external.page';

describe('UpdateMasterDataExternalPage', () => {
  let component: UpdateMasterDataExternalPage;
  let fixture: ComponentFixture<UpdateMasterDataExternalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateMasterDataExternalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMasterDataExternalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
