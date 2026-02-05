import { Module } from '@nestjs/common';
import { PatientsController } from './patients.controller';
import { PatientsService } from './patients.service';
import { RepositoryModule } from '@ospedale/repository';

@Module({
  imports: [RepositoryModule],
  controllers: [PatientsController],
  providers: [PatientsService],
  exports: [],
})
export class PatientsModule {}
