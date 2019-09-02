import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api'

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const phoneBookDate = [
      { id: 1, name: 'John', surname: 'Stamatelos', phoneNumber: '0820001111' },
      { id: 2, name: 'Harry', surname: 'Potter', phoneNumber: '0820002222' },
      { id: 3, name: 'Super', surname: 'Man', phoneNumber: '0820003333' },
      { id: 4, name: 'Hulk', surname: 'Green', phoneNumber: '0820004444' },
      { id: 5, name: 'Captain', surname: 'America', phoneNumber: '0820005555' },
    ];
    return { phoneBookDate };
  }
}
