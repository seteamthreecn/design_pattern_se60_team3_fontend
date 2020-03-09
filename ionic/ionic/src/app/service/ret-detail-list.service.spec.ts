import { TestBed } from '@angular/core/testing';

import { RetDetailListService } from './ret-detail-list.service';

describe('RetDetailListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RetDetailListService = TestBed.get(RetDetailListService);
    expect(service).toBeTruthy();
  });
});
