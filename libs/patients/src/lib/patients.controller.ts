import { Body, Controller, Delete, Get, HttpStatus, Param, ParseIntPipe, Patch, Post, Put } from '@nestjs/common';
import { PatientsService } from './patients.service';
import { ApiError, CreatePatientDto, PatientDto, SubstitutionPatientDto, UpdatePatientDto } from '@ospedale/repository';
import { ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';

@Controller('patients')
export class PatientsController {
  constructor(private patientsService: PatientsService) { }

  @Get()
  @ApiOperation({
    operationId: "Patient.getAll",
    description: "API per il recupero di tutti i pazienti",
    summary: "restituisce i pazienti",
  })
  @ApiResponse({
    status: HttpStatus.OK,
    type: PatientDto,
    isArray: true
  })
  getAll() {
    return this.patientsService.getAll();
  }

  @Get(":id")
  @ApiOperation({
    operationId: "Patient.get",
    description: "API per il recupero di un paziente",
    summary: "restituisce il paziente",
  })
  @ApiParam({
    type: "number",
    name: "id",
    description: "ID del paziente",
  })
  @ApiResponse({
    status: HttpStatus.OK,
    type: PatientDto
  })
  get(@Param("id", ParseIntPipe) id: number) {
    return this.patientsService.get(id);
  }


  @Post()
  @ApiOperation({
    operationId: "Patient.create",
    description: "API per l'inserimento di un nuovo paziente",
    summary: "crea un paziente",
  })
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
  @ApiOperation({
    operationId: "Patient.substituition",
    description: "API per la sostituzione di un paziente",
    summary: "sostituisce un paziente",
  })
  @ApiParam({
    type: "number",
    name: "id",
    description: "ID del paziente",
  })
  @ApiResponse({
    status: HttpStatus.CREATED,
    type: PatientDto
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    type: ApiError
  })
  substituition(@Param("id", ParseIntPipe) id: number, @Body() patient: SubstitutionPatientDto) {
    return this.patientsService.substitution(id, patient);
  }

  @Patch(":id")
  @ApiOperation({
    operationId: "Patient.update",
    description: "API per l'aggiornamento di un paziente",
    summary: "aggiorna un paziente",
  })
  @ApiParam({
    type: "number",
    name: "id",
    description: "ID del paziente",
  })
  @ApiResponse({
    status: HttpStatus.CREATED,
    type: PatientDto
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    type: ApiError
  })
  update(@Param("id", ParseIntPipe) id: number, @Body() patient: UpdatePatientDto) {
    return this.patientsService.update(id, patient);
  }


  @Delete(":id")
  @ApiOperation({
    operationId: "Patient.delete",
    description: "API per l'eliminazione di un paziente",
    summary: "elimina un paziente",
  })
  @ApiParam({
    type: "number",
    name: "id",
    description: "ID del paziente",
  })
  @ApiResponse({
    status: HttpStatus.CREATED,
    type: PatientDto
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    type: ApiError
  })
  delete(@Param("id", ParseIntPipe) id: number) {
    return this.patientsService.delete(id);
  }

}
