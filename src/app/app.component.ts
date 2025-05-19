import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { HeadersComponent } from './components/headers/headers.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatIconModule, HeadersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-project-v18-2025-04';
}
