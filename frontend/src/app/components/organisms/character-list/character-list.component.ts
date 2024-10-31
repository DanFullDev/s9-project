import { Component } from '@angular/core';
import { CharacterCardComponent } from '../../molecules/character-card/character-card.component';
import { CharacterDataService } from '../../../services/data/character-data.service';
import { Character } from '../../../models/character.model';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [CharacterCardComponent, NgFor],
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.scss',
})
export class CharacterListComponent {
  characters: Character[] = [];

  constructor(private charData: CharacterDataService) {}

  ngOnInit(): void {
    this.charData.characters$.subscribe((chars) => {
      this.characters = chars;
    });

    this.charData.loadCharacters();
  }
}
