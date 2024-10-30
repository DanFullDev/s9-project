import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainTemplateComponent } from './components/templates/main-template/main.template.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainTemplateComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'frontend';
}
