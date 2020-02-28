import { TestBed } from '@angular/core/testing';

import { ExternalDepartmentService } from './external-department.service';

describe('ExternalDepartmentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExternalDepartmentService = TestBed.get(ExternalDepartmentService);
    expect(service).toBeTruthy();
  });
});
