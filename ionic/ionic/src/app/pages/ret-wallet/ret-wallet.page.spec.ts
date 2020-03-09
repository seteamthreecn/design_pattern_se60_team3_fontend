import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetWalletPage } from './ret-wallet.page';

describe('RetWalletPage', () => {
  let component: RetWalletPage;
  let fixture: ComponentFixture<RetWalletPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetWalletPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetWalletPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
