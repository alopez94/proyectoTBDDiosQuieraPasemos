import { TestBed } from '@angular/core/testing';

import { TableServices } from './table.service';

describe('TableServices', () => {
  let service: TableServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TableServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
