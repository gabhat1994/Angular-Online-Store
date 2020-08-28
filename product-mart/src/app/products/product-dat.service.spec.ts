import { TestBed } from '@angular/core/testing';

import { ProductDatService } from './product-dat.service';

describe('ProductDatService', () => {
  let service: ProductDatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductDatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
