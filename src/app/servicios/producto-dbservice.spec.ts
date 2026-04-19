import { TestBed } from '@angular/core/testing';

import { ProductoDbservice } from './producto-dbservice';

describe('ProductoDbservice', () => {
  let service: ProductoDbservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductoDbservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
