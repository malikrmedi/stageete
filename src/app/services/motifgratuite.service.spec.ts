import { TestBed } from '@angular/core/testing';

import { MotifgratuiteService } from './motifgratuite.service';

describe('MotifgratuiteService', () => {
  let service: MotifgratuiteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MotifgratuiteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
