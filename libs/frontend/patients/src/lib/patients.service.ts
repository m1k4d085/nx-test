import { inject, Injectable } from '@angular/core';
import { PatientsService as PatientsAPIService } from '@ospedale/API';

@Injectable({
  providedIn: 'root',
})
export class PatientsService {
  private readonly patientsAPIService = inject(PatientsAPIService);

  getAll() {
    return this.patientsAPIService.patientGetAll();
  }

  get(id: number) {
    return this.patientsAPIService.patientGet(id);
  }

  create(createDTO: {
    nome: string;
    cognome: string;
  }) {
    return this.patientsAPIService.patientCreate({
      ...createDTO
    });
  }

}
