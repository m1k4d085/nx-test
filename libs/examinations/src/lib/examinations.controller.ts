import { Controller } from '@nestjs/common';
import { ExaminationsService } from './examinations.service';

@Controller('examinations')
export class ExaminationsController {
  constructor(private examinationsService: ExaminationsService) {}
}
