import { AsyncPipe, CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Component, inject } from '@angular/core';
import { PatientsService } from '@ospedale/ng-patients';

@Component({
  selector: 'asepa-patients',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AsyncPipe,
  ],
  templateUrl: './patients.html',
  styleUrl: './patients.scss',
})
export class Patients {
  private readonly patientsService = inject(PatientsService);
  
  patients$ = this.patientsService.getAll();

  formGroup = new FormGroup({
    nome: new FormControl(''),
    cognome: new FormControl(''),
  })
  
  submit() {
    if (this.formGroup.value.nome && this.formGroup.value.cognome) {
      this.patientsService.create({
        nome: this.formGroup.value.nome,
        cognome: this.formGroup.value.cognome,
      }).subscribe();
    }
  }

}
