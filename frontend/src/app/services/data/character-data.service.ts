import { Injectable } from '@angular/core';
import { BehaviorSubject, tap, Observable } from 'rxjs';
import { Character } from '../../models/character.model';
import { CharactersApiService } from '../api/characters-api.service';

@Injectable({
  providedIn: 'root',
})
export class CharacterDataService {
  private charactersSubject = new BehaviorSubject<Character[]>([]);
  characters$ = this.charactersSubject.asObservable();

  constructor(private characterApiService: CharactersApiService) {}

  loadCharacters(): void {
    this.characterApiService
      .getCharacters()
      .pipe(tap((chars) => this.charactersSubject.next(chars)))
      .subscribe();
  }
}
