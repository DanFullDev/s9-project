import { Component, Input } from '@angular/core';
import { Character } from '../../../models/character.model';
import { CapitalizeFirstLetterPipe } from '../../../pipes/capitalize-first-letter.pipe';
import { IconComponent } from '../../atoms/icon/icon.component';

@Component({
  selector: 'app-character-card',
  standalone: true,
  imports: [CapitalizeFirstLetterPipe, IconComponent],
  templateUrl: './character-card.component.html',
  styleUrl: './character-card.component.scss',
})
export class CharacterCardComponent {
  @Input() character!: Character;
}
