import { TestBed } from '@angular/core/testing';

import { RetDetailSubTypeService } from './ret-detail-sub-type.service';

describe('RetDetailSubTypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RetDetailSubTypeService = TestBed.get(RetDetailSubTypeService);
    expect(service).toBeTruthy();
  });
});
