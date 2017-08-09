import { TestBed, inject } from '@angular/core/testing';

import { ReciboDataService } from './recibo-data.service';

describe('ReciboDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReciboDataService]
    });
  });

  it('should be created', inject([ReciboDataService], (service: ReciboDataService) => {
    expect(service).toBeTruthy();
  }));
});
