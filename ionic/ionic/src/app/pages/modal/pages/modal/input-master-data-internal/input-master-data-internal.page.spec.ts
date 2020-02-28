import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputMasterDataInternalPage } from './input-master-data-internal.page';

describe('InputMasterDataInternalPage', () => {
  let component: InputMasterDataInternalPage;
  let fixture: ComponentFixture<InputMasterDataInternalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputMasterDataInternalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputMasterDataInternalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
