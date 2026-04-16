import { AsyncPipe, CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Component, inject } from '@angular/core';
import { PatientsService } from '@ospedale/ng-patients';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';

@Component({
  selector: 'asepa-patients',
  imports: [
    CommonModule,
    FormlyModule,
    ReactiveFormsModule,
    AsyncPipe,
  ],
  templateUrl: './patients.html',
  styleUrl: './patients.scss',
})
export class Patients {
  private readonly patientsService = inject(PatientsService);

  patients$ = this.patientsService.getAll();

  formGroup = new FormGroup({});

  fields: FormlyFieldConfig[] = [
    {
      id: "nome",
      key: "nome",
      type: "input",
      props: {
        label: "Nome",
        required: true,
        // type: "text"
      }
    },
    {
      id: "cognome",
      key: "cognome",
      type: "input",
      props: {
        label: "Cognome",
        required: true,
        // type: "text"
      }
    },
    {
      key: "altro",
      fieldGroup: [
        {
          id: "dataNascita",
          key: "dataNascita",
          type: "input",
          props: {
            label: "Data di Nascita",
            type: "date"
          }
        }
      ]
    }
  ];

  model = {} as { nome: string; cognome: string; dataNascita?: string };

  // formGroup = new FormGroup({
  //   nome: new FormControl(''),
  //   cognome: new FormControl(''),
  //   altro: new FormGroup({
  //     dataNascita: new FormControl(null),
  //   })
  // });

  // submit() {
  //   const value = this.formGroup.value;
  //   console.log(value);
  //   if (value.nome && value.cognome) {
  //     this.patientsService.create({
  //       nome: value.nome,
  //       cognome: value.cognome,
  //     }).subscribe();
  //   }
  // }

  submit() {
    console.log(this.model);
    if (this.model.nome && this.model.cognome) {
      this.patientsService.create({
        nome: this.model.nome,
        cognome: this.model.cognome,
      }).subscribe();
    }
  }

}
