import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputMasterDataExternalPage } from './input-master-data-external.page';

describe('InputMasterDataExternalPage', () => {
  let component: InputMasterDataExternalPage;
  let fixture: ComponentFixture<InputMasterDataExternalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputMasterDataExternalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputMasterDataExternalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
