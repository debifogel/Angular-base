import { TestBed } from '@angular/core/testing';

import { EventesApiService } from './eventes-api.service';

describe('EventesApiService', () => {
  let service: EventesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventesApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
