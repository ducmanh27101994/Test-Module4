import { TestBed } from '@angular/core/testing';

import { AwesomeService } from './awesome.service';

describe('AwesomeService', () => {
  let service: AwesomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AwesomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
