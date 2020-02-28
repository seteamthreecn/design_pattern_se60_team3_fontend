import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputMasterDataCategoryPage } from './input-master-data-category.page';

describe('InputMasterDataCategoryPage', () => {
  let component: InputMasterDataCategoryPage;
  let fixture: ComponentFixture<InputMasterDataCategoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputMasterDataCategoryPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputMasterDataCategoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
