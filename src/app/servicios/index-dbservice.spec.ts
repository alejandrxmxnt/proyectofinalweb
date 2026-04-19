import { TestBed } from '@angular/core/testing';

import { IndexDbservice } from './index-dbservice';

describe('IndexDbservice', () => {
  let service: IndexDbservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IndexDbservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
