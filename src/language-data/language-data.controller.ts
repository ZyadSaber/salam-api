import { LanguageDataService } from './language-data.service';
import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('api/language_data')
export class LanguageDataController {
  constructor(private LanguageDataService: LanguageDataService) {}
  @Get('get_language_main_data')
  getData() {
    return this.LanguageDataService.getLabelData();
  }

  @Get('language_display')
  getDataDisplay(@Req() req: Request) {
    return this.LanguageDataService.getLabelDisplay(req.query);
  }
}
