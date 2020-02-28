import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMasterDataChannelPage } from './update-master-data-channel.page';

describe('UpdateMasterDataChannelPage', () => {
  let component: UpdateMasterDataChannelPage;
  let fixture: ComponentFixture<UpdateMasterDataChannelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateMasterDataChannelPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMasterDataChannelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
