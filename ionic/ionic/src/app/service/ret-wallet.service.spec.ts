import { TestBed } from '@angular/core/testing';

import { RetWalletService } from './ret-wallet.service';

describe('RetWalletService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RetWalletService = TestBed.get(RetWalletService);
    expect(service).toBeTruthy();
  });
});
