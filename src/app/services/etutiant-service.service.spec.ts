import { TestBed } from '@angular/core/testing';
import { EtudiantService } from '../services/etutiant-service.service';

describe('EtutiantServiceService', () => {
  let service: EtudiantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EtudiantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
