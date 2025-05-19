import { Component, inject, Injectable } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { CdkTrapFocus } from '@angular/cdk/a11y';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { DateRange, MAT_DATE_RANGE_SELECTION_STRATEGY, MatDatepickerModule, MatDateRangeSelectionStrategy } from '@angular/material/datepicker';
import { DateAdapter, MAT_DATE_LOCALE, provideNativeDateAdapter } from '@angular/material/core';
import { provideMomentDateAdapter } from '@angular/material-moment-adapter';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

export const MY_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Injectable()
export class Nombreclase<D> implements MatDateRangeSelectionStrategy<D> {

  dateAdapter = inject<DateAdapter<D>>(DateAdapter<D>);
  selectionFinished(date: D): DateRange<D> {
    return this.metodo(date);
  }
  createPreview(activeDate: D): DateRange<D> {
    return this.metodo(activeDate);
  }

  metodo(date: D | null): DateRange<D> {
    if (date) {
      const end = this.dateAdapter.addCalendarDays(date, 7);
      return new DateRange<D>(date, end);
    }
    return new DateRange<D>(null, null);
  }
}

@Component({
  selector: 'app-formulario',
  standalone: true,
  providers: [
    provideNativeDateAdapter(),
    provideMomentDateAdapter(MY_FORMATS),
    { provide: MAT_DATE_LOCALE, useValue: 'es-CL' },
    { provide: MAT_DATE_RANGE_SELECTION_STRATEGY, useClass: Nombreclase }
  ],
  imports: [MatCardModule, MatFormFieldModule, MatInputModule, MatIconModule, CdkTrapFocus, MatSelectModule,
    MatRadioModule, MatCheckboxModule, MatDatepickerModule, MatSliderModule, MatSlideToggleModule, ReactiveFormsModule,
    MatBadgeModule, MatButtonToggleModule, MatButtonModule, MatChipsModule, MatAutocompleteModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss'
})
export class FormularioComponent {

  form = new FormGroup({
    rut: new FormControl("", Validators.maxLength(10))
  });
  frutas = ['pera'];
  minDate: any;
  maxDate: any;

  dateChange(event: any) {
    this.minDate = new Date(event.value);
    this.maxDate = new Date(this.minDate);
    this.maxDate.setDate(this.maxDate.getDate() + 6);
  }

  onRemove(fruta: any) {
    let indice = this.frutas.indexOf(fruta);
    this.frutas.splice(indice, 1);
  }

  addFruta(event: MatChipInputEvent) {
    this.frutas.push(event.value);
    event.chipInput.clear();
  }

  onKeyUp(event: any) {
    if (event.code.startsWith('Numpad') | event.code.startsWith('Digit')) {
      let formatter = new Intl.NumberFormat('es-CL', { minimumFractionDigits: 0 });
      this.form.get('rut')?.setValue(formatter.format(Number(String(this.form.value.rut).replace(/[.]/g, ""))));
    } else {
      this.form.get('rut')?.setValue(String(this.form.value.rut).slice(0, -1));
    }
  }
}
