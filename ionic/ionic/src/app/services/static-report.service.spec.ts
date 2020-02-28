import { TestBed } from '@angular/core/testing';

import { StaticReportService } from './static-report.service';

describe('StaticReportService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StaticReportService = TestBed.get(StaticReportService);
    expect(service).toBeTruthy();
  });
});
