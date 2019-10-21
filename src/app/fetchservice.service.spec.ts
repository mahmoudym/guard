import { TestBed } from '@angular/core/testing';

import { FetchserviceService } from './fetchservice.service';

describe('FetchserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FetchserviceService = TestBed.get(FetchserviceService);
    expect(service).toBeTruthy();
  });
});
