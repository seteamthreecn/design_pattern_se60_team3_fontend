import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputMasterDataPage } from './input-master-data.page';

describe('InputMasterDataPage', () => {
  let component: InputMasterDataPage;
  let fixture: ComponentFixture<InputMasterDataPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputMasterDataPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputMasterDataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
