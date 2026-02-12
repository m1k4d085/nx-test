import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { PatientsService } from './patients.service';
import { CreatePatientDto, SubstitutionPatientDto, UpdatePatientDto } from '@ospedale/repository';

@Controller('patients')
export class PatientsController {
  constructor(private patientsService: PatientsService) {}

  @Get()
  getAll() {
    return this.patientsService.getAll();
  }

  @Get(":id")
  get(@Param("id") id: string) {
    const parsedId = parseInt(id);
    return this.patientsService.get(parsedId);
  }


  @Post()
  create(@Body() patient: CreatePatientDto) {
    return this.patientsService.create(patient);
  }

  @Put(":id")
  substituition(@Param("id") id: string, @Body() patient: SubstitutionPatientDto) {
    const parsedId = parseInt(id);
    return this.patientsService.substitution(parsedId, patient);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() patient: UpdatePatientDto) {
    const parsedId = parseInt(id);
    return this.patientsService.update(parsedId, patient);
  }


  @Delete(":id")
  delete(@Param("id") id: string) {
    const parsedId = parseInt(id);
    return this.patientsService.delete(parsedId);
  }

}
