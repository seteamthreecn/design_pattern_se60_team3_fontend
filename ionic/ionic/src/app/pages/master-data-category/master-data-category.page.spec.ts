import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterDataCategoryPage } from './master-data-category.page';

describe('MasterDataCategoryPage', () => {
  let component: MasterDataCategoryPage;
  let fixture: ComponentFixture<MasterDataCategoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterDataCategoryPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterDataCategoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
