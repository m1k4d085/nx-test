import { Injectable } from '@nestjs/common';
import { PrismaClientService } from '@ospedale/repository';

@Injectable()
export class ExaminationsService {
    constructor(private prismaClient: PrismaClientService) {}
}
