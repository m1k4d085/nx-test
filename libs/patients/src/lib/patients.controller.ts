import { Body, Controller, Delete, Get, HttpStatus, Param, ParseIntPipe, Patch, Post, Put } from '@nestjs/common';
import { PatientsService } from './patients.service';
import { ApiError, CreatePatientDto, PatientDto, SubstitutionPatientDto, UpdatePatientDto } from '@ospedale/repository';
import { ApiResponse } from '@nestjs/swagger';

@Controller('patients')
export class PatientsController {
  constructor(private patientsService: PatientsService) { }

  @Get()
  getAll() {
    return this.patientsService.getAll();
  }

  @Get(":id")
  get(@Param("id", ParseIntPipe) id: number) {
    return this.patientsService.get(id);
  }


  @Post()
  @ApiResponse({
    status: HttpStatus.CREATED,
    type: PatientDto
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    type: ApiError
  })
  create(@Body() patient: CreatePatientDto) {
    return this.patientsService.create(patient);
  }

  @Put(":id")
  substituition(@Param("id", ParseIntPipe) id: number, @Body() patient: SubstitutionPatientDto) {
    return this.patientsService.substitution(id, patient);
  }

  @Patch(":id")
  update(@Param("id", ParseIntPipe) id: number, @Body() patient: UpdatePatientDto) {
    return this.patientsService.update(id, patient);
  }


  @Delete(":id")
  delete(@Param("id", ParseIntPipe) id: number) {
    return this.patientsService.delete(id);
  }

}
