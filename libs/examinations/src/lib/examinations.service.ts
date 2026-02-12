import { Injectable } from '@nestjs/common';
import { PrismaService } from '@ospedale/repository';

@Injectable()
export class ExaminationsService {
    constructor(private prismaClient: PrismaService) {
        
    }
}
