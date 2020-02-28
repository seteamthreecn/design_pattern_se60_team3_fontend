import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterDataExternalPage } from './master-data-external.page';

describe('MasterDataExternalPage', () => {
  let component: MasterDataExternalPage;
  let fixture: ComponentFixture<MasterDataExternalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterDataExternalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterDataExternalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
