import { TestBed } from '@angular/core/testing';

import { CategoriaDbservice } from './categoria-dbservice';

describe('CategoriaDbservice', () => {
  let service: CategoriaDbservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoriaDbservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
