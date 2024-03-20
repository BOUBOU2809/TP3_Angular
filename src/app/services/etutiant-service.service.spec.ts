import { TestBed } from '@angular/core/testing';

import { EtutiantServiceService } from './etutiant-service.service';

describe('EtutiantServiceService', () => {
  let service: EtutiantServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EtutiantServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
