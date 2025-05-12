import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { DadJoke, ChuckNorrisJoke } from '../interfaces/jokes';

const DAD_JOKES_API_URL = 'https://icanhazdadjoke.com/';
const CHUCK_NORRIS_API_URL = 'https://api.chucknorris.io/jokes/random';

// αντίστοιχο με το @Component στα components
@Injectable({
  providedIn: 'root'
})
export class JokesService {
  http: HttpClient = inject(HttpClient);  // μεταβλητή http που ενσωματώνει όλες τις διαδικασίες του HttpClient

  getDadJokes() {
    return this.http.get<DadJoke>(DAD_JOKES_API_URL, {
      headers: {
        Accept: 'application/json',
      }
    })
  }

  getChuckNorrisJoke() {
    return this.http.get<ChuckNorrisJoke>(CHUCK_NORRIS_API_URL, {
      headers: {
        Accept: 'application/json'
      }
    })
  }

}
