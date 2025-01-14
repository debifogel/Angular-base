import { TestBed } from '@angular/core/testing';

import { CourseslistService } from './courseslist.service';

describe('CourseslistService', () => {
  let service: CourseslistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourseslistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
