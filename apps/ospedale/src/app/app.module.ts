import { Module } from '@nestjs/common';
import { PatientsModule } from '@ospedale/patients'
import { ExaminationsModule } from '@ospedale/examinations'

@Module({
  imports: [PatientsModule, ExaminationsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
