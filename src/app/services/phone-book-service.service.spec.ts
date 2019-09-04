import { TestBed } from '@angular/core/testing';

import { PhoneBookService } from './phone-book-service.service';
import { HttpClientModule } from '@angular/common/http';

describe('PhoneBookService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    })
  });

  it('should be created', () => {
    const service: PhoneBookService = TestBed.get(PhoneBookService);
    expect(service).toBeTruthy();
  });
});
