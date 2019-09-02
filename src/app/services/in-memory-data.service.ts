// import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api'

// @Injectable()
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const phoneBookData = [
      { id: 1, name: 'John', surname: 'Stamatelos', phoneNumber: '0820001111' },
      { id: 2, name: 'Bat', surname: 'Man', phoneNumber: '0820002222' },
      { id: 3, name: 'Super', surname: 'Man', phoneNumber: '0820003333' },
      { id: 4, name: 'Spider', surname: 'Man', phoneNumber: '0820004444' },
      { id: 5, name: 'Captain', surname: 'America', phoneNumber: '0820005555' },
      { id: 6, name: 'Victor', surname: 'Surname', phoneNumber: '0820001111' },
      { id: 7, name: 'Wesley', surname: 'Surname', phoneNumber: '0820002222' },
      { id: 8, name: 'Euston', surname: 'Surname', phoneNumber: '0820003333' },
      { id: 9, name: 'Richard', surname: 'Surname', phoneNumber: '0820004444' },
      { id: 10, name: 'Yudesh', surname: 'Surname', phoneNumber: '0820005555' },
    ];
    return { phoneBookData };
  }
}
