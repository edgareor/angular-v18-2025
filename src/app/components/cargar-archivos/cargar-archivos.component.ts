import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cargar-archivos',
  standalone: true,
  imports: [MatTabsModule, MatIconModule, ReactiveFormsModule, MatButtonModule],
  templateUrl: './cargar-archivos.component.html',
  styleUrl: './cargar-archivos.component.scss'
})
export class CargarArchivosComponent {

  constructor(private _snackBar: MatSnackBar) { }
  change(event: any) {
    console.log(event);
  }

  name: any;
  archivo: any;
  isCsv = false;

  form = new FormGroup({
    file: new FormControl(null, [Validators.required]),
  });

  selectFileRec(event: any) {
    if (event.target.files[0].name.endsWith('.csv')) {
      this.isCsv = true;
      this.archivo = event.target.files[0];
      this.name = event.target.files[0].name;
    } else {
      this.name = 'El archivo debe ser tipo CSV';
    }
  }

  submit() {
    this._snackBar.open(
      "Archivo: " + this.name + " cargado correctamente",
      "Salir",
      { duration: 3000 }
    );
    this.name = null;
  }
}
