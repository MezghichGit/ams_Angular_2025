import { TestBed } from '@angular/core/testing';

import { Provider } from './provider';

describe('Provider', () => {
  let service: Provider;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Provider);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
