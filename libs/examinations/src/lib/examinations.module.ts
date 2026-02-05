import { Module } from '@nestjs/common';
import { ExaminationsController } from './examinations.controller';
import { ExaminationsService } from './examinations.service';
import { RepositoryModule } from '@ospedale/repository';

@Module({
  imports: [RepositoryModule],
  controllers: [ExaminationsController],
  providers: [ExaminationsService],
  exports: [],
})
export class ExaminationsModule {}
