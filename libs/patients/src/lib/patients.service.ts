import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreatePatientDto, PrismaService, SubstitutionPatientDto, UpdatePatientDto } from '@ospedale/repository';

@Injectable()
export class PatientsService {
    constructor(private prismaClient: PrismaService) { }

    getAll() {
        return this.prismaClient.patient.findMany({
            include: {
                exams: true,
            }
        });
    }

    get(id: number) {
        return this.prismaClient.patient.findUnique({
            where: { id }, include: {
                exams: true,
            }
        });
    }

    async create(createPatientDto: CreatePatientDto) {
        try {
            return await this.prismaClient.patient.create({
                data: createPatientDto
            });
        } catch (error) {
            console.error(error);
            throw new HttpException("Campi errati", HttpStatus.BAD_REQUEST);
        }
    }

    substitution(id: number, substitutionPatientDto: SubstitutionPatientDto) {
        if (!substitutionPatientDto.nome || !substitutionPatientDto.cognome) throw new HttpException("Campi errati", HttpStatus.BAD_REQUEST);
        return this.prismaClient.patient.update({
            where: { id },
            data: substitutionPatientDto
        });
    }

    update(id: number, updatePatientDto: UpdatePatientDto) {
        return this.prismaClient.patient.update({
            where: { id },
            data: updatePatientDto
        });
    }

    async delete(id: number) {
        const patient = await this.get(id);
        if (!patient) throw new HttpException(`Paziente ID=${id} non trovato`, HttpStatus.BAD_REQUEST);
        return await this.prismaClient.patient.delete({
            where: { id }
        });
    }
}

/*

    Database
    Persons -> table persons
    {
        id: number;
        name: string;
        surname: string;
        contacts: Contacts[]
    }
    Contacts -> table contacts -> id persons
    {
        id: number;
        type: "email" | "telefono";
        value: string,
        personId: number;
    }

    API DTO
    PersonDto
    {
        name: string;
        surname: string;
        email: string;
        phone: string;
    }

*/