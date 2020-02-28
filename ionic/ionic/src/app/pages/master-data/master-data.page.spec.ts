import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterDataPage } from './master-data.page';

describe('MasterDataPage', () => {
  let component: MasterDataPage;
  let fixture: ComponentFixture<MasterDataPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterDataPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterDataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
