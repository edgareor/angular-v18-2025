import { Component, OnInit } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { QRCodeModule } from 'angularx-qrcode';
import { concat, filter, first, from, last, map, of } from 'rxjs';

@Component({
  selector: 'app-testing',
  standalone: true,
  imports: [DragDropModule,QRCodeModule],
  templateUrl: './testing.component.html',
  styleUrl: './testing.component.scss'
})
export class TestingComponent implements OnInit {
  ngOnInit(): void {
    let obs = from([1, 2, 3]).pipe(last());
    obs.subscribe(data => console.log(data));
  }

}
