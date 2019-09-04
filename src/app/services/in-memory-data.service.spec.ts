import { InMemoryDataService } from "./in-memory-data.service";
import { TestBed } from '@angular/core/testing';

describe('InMemoryDataService', () => {
  let service: InMemoryDataService
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InMemoryDataService]
    })
  });

  it('should have instance of InMemoryDataService created', () => {
    const service: InMemoryDataService = TestBed.get(InMemoryDataService);
    expect(service).toBeTruthy();
  });

  it('should have no db when starting', () => {
    service = new InMemoryDataService()
    expect(service.createDb.length).toBe(0);
  })

  it('should return array of 10 items when createDb is called', () => {
    service = new InMemoryDataService()
    var returnData = service.createDb();
    expect(returnData.phoneBookData.length).toBe(10);
  })

})
