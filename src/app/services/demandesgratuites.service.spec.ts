import { TestBed } from '@angular/core/testing';

import { DemandesgratuitesService } from './demandesgratuites.service';

describe('DemandesgratuitesService', () => {
  let service: DemandesgratuitesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemandesgratuitesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
