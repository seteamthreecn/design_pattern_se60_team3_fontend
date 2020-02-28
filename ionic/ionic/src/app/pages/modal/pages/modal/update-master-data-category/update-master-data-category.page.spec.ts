import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMasterDataCategoryPage } from './update-master-data-category.page';

describe('UpdateMasterDataCategoryPage', () => {
  let component: UpdateMasterDataCategoryPage;
  let fixture: ComponentFixture<UpdateMasterDataCategoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateMasterDataCategoryPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMasterDataCategoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
