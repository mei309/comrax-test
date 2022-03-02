import { TestBed } from '@angular/core/testing';

import { SearchListenerService } from './search-listener.service';

describe('SearchListenerService', () => {
  let service: SearchListenerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchListenerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
