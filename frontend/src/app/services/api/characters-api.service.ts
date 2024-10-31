import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Character } from '../../models/character.model';

@Injectable({
  providedIn: 'root',
})
export class CharactersApiService {
  private apiURL: string = 'https://rickandmortyapi.com/api/character/?page=1';

  constructor(private http: HttpClient) {}

  getCharacters(): Observable<Character[]> {
    return this.http
      .get<{ results: Character[] }>(this.apiURL)
      .pipe(map((response) => response.results));
  }
}
