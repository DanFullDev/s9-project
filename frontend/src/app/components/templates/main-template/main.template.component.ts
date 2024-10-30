import { Component } from '@angular/core';
import { FooterComponent } from '../../organisms/footer/footer.component';
import { HeaderComponent } from '../../organisms/header/header.component';
import { ModalComponent } from '../../organisms/modal/modal.component';
import { CharacterListComponent } from '../../organisms/character-list/character-list.component';

@Component({
  selector: 'app-main-template',
  standalone: true,
  imports: [
    FooterComponent,
    HeaderComponent,
    ModalComponent,
    CharacterListComponent,
  ],
  templateUrl: './main.template.component.html',
  styleUrl: './main.template.component.scss',
})
export class MainTemplateComponent {}
