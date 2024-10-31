import { Component, Input } from '@angular/core';
import { CrudButton } from '../../../models/crudbutton.model';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss',
})
export class IconComponent {
  @Input() iconData!: CrudButton;
}
