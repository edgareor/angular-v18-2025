import { Component, inject } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { RegisterDialogComponent } from './dialog/register-dialog/register-dialog.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import { MatRippleModule } from '@angular/material/core';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-registrarse',
  standalone: true,
  imports: [MatCardModule, MatDialogModule, MatButtonModule, MatProgressSpinnerModule, MatSnackBarModule, MatRippleModule,
    MatExpansionModule, MatIconModule
  ],
  templateUrl: './registrarse.component.html',
  styleUrl: './registrarse.component.scss'
})
export class RegistrarseComponent {
  private _snackBar = inject(MatSnackBar);
  flag = true;
  readonly dialog = inject(MatDialog);
  openDialog() {
    const dialogRef = this.dialog.open(RegisterDialogComponent, {
      height: '400px',
      width: '300px',
      data: { campo1: "valor1", campo2: "valor2" },
      enterAnimationDuration: '1000ms'
    });

    dialogRef.afterClosed().subscribe(async (data) => {
      console.log(`Dialogo cerrado: `, data);
      this.flag = false;
      setTimeout(() => {
        this.flag = true;
        this._snackBar.open('Registro exitoso', 'Salir', {
          duration: 3000,
          panelClass: 'class-snackbar' 
        })
      }, 2000);
    });
  }
}
