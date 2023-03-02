import { TestBed } from '@angular/core/testing';

import { EsnapService } from './esnap.service';

describe('EsnapService', () => {
  let service: EsnapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EsnapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
