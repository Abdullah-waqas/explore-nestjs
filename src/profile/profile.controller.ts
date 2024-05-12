import { Controller, Get } from '@nestjs/common';
import { AppService } from 'src/app.service';

@Controller('profile')
export class ProfileController {
  /**
   *
   */
  constructor(private readonly appService: AppService) {}

  @Get('/:profile_id')
  getProfile(): string {
    return '1112234';
  }
}
