import { TestBed } from '@angular/core/testing';

import { GotService } from './got.service';

describe('GotService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GotService = TestBed.get(GotService);
    expect(service).toBeTruthy();
  });
});
