import { Injectable } from '@nestjs/common';
import { PrismaClient } from '../../generated/client';

@Injectable()
export class PrismaClientService extends PrismaClient {}
