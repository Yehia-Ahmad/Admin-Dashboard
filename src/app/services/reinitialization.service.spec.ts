import { TestBed } from '@angular/core/testing';

import { ReinitializationService } from './reinitialization.service';

describe('ReinitializationService', () => {
  let service: ReinitializationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReinitializationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
