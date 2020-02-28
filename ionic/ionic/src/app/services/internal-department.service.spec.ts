import { TestBed } from '@angular/core/testing';

import { InternalDepartmentService } from './internal-department.service';

describe('InternalDepartmentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InternalDepartmentService = TestBed.get(InternalDepartmentService);
    expect(service).toBeTruthy();
  });
});
