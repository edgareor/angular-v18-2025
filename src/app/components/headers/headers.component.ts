import { Component, Inject } from '@angular/core';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatRippleModule } from '@angular/material/core';
import {MatMenuModule} from '@angular/material/menu';
import { CommonModule, DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-headers',
  standalone: true,
  imports: [RouterOutlet, RouterLink, MatToolbarModule,MatIconModule,MatButtonModule, MatSidenavModule, MatListModule,
    MatRippleModule, MatMenuModule, CommonModule],
  templateUrl: './headers.component.html',
  styleUrl: './headers.component.scss'
})
export class HeadersComponent {
  flagLike = false;

  constructor(@Inject(DOCUMENT) private document: Document) {}
  
  click() {
    console.log('click');
  }

  like(){
    this.flagLike = !this.flagLike;  
  }

  toogleTheme(){
    if (this.document.body.classList.contains('light')) {
      this.document.body.classList.remove('light');
      this.document.body.classList.add('dark');
    } else {
      this.document.body.classList.remove('dark');
      this.document.body.classList.add('light');
    }
  }
}
