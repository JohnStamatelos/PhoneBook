import { TestBed } from '@angular/core/testing';

import { PhoneBookServiceService } from './phone-book-service.service';

describe('PhoneBookServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PhoneBookServiceService = TestBed.get(PhoneBookServiceService);
    expect(service).toBeTruthy();
  });
});
