import { Component, Inject, inject, OnInit } from '@angular/core';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register-dialog',
  standalone: true,
  imports: [MatDialogModule, MatCardModule, MatButtonModule, MatFormFieldModule, MatIconModule, ReactiveFormsModule, 
    MatInputModule, FormsModule],
  templateUrl: './register-dialog.component.html',
  styleUrl: './register-dialog.component.scss'
})
export class RegisterDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  readonly dialogRef = inject(MatDialogRef<any>);
  form = new FormGroup({
    nombre: new FormControl(),
    apellido: new FormControl()
  });

  ngOnInit(): void {
    this.form.setValue({
      nombre: this.data.campo1,
      apellido: this.data.campo2
    })
  }

  cerrarDialog() {
    this.dialogRef.close("info");				// Cerrar dialogo.							
  }
}
