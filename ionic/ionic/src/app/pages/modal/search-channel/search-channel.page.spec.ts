import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchChannelPage } from './search-channel.page';

describe('SearchChannelPage', () => {
  let component: SearchChannelPage;
  let fixture: ComponentFixture<SearchChannelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchChannelPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchChannelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
