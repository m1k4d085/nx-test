import { Injectable } from '@nestjs/common';
import { PrismaClientService } from '@ospedale/repository';

@Injectable()
export class PatientsService {
    constructor(private prismaClient: PrismaClientService) {}
}
