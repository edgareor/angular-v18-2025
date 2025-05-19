import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { filter, firstValueFrom } from 'rxjs';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SelectionModel } from '@angular/cdk/collections';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { GenerateFileService } from '../../services/generate-file.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatTableModule, MatSortModule, MatPaginatorModule, CommonModule, MatFormFieldModule, MatInputModule, MatInputModule,
    MatCheckboxModule, MatButtonModule, MatIconModule, MatTooltipModule, ClipboardModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  getUsers = inject(UsersService);
  generateFile = inject(GenerateFileService);

  displayedColumns: string[] = ['select', 'userId', 'id', 'title', 'completed', 'copy'];
  dataSource!: MatTableDataSource<any>;
  selection = new SelectionModel<any>(true, []);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  async ngOnInit() {
    this.dataSource = new MatTableDataSource<any>(await firstValueFrom(this.getUsers.getUser()));
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  isAllSelected() {
    return this.selection.selected.length === this.dataSource.data.length;
  }

  onclick(event: any) {
    console.log('click sobre alguna linea: ', event);
  }

  onPage(event: any) {
    console.log(event);
  }

  announceSortChange(event: any) {
    console.log(event);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  toggleAllRows() {
    if (this.isAllSelected()) {   // Si estan todas seleccionadas.
      this.selection.clear();                                               // Limpiar las selecciones.
      return;                                                               // Detener flujo
    }
    this.selection.select(...this.dataSource.data);                         // Si no estan todas seleccionadas, seleccionar. 
  }

  imprimirSelected() {
    console.log(this.selection.selected);
  }

  descargarExcel() {
    this.generateFile.generateExcel(this.selection.selected);
  }

  descargarPdf() {
    this.generateFile.generatePDF(this.selection.selected);
  }
}
