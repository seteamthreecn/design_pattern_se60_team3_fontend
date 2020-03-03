import { TestBed } from '@angular/core/testing';

import { RetUserService } from './ret-user.service';

describe('RetUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RetUserService = TestBed.get(RetUserService);
    expect(service).toBeTruthy();
  });
});
