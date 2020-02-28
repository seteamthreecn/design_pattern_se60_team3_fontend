import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterDataChannelPage } from './master-data-channel.page';

describe('MasterDataChannelPage', () => {
  let component: MasterDataChannelPage;
  let fixture: ComponentFixture<MasterDataChannelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterDataChannelPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterDataChannelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
