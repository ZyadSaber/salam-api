import { Module } from '@nestjs/common';
import { LanguageDataController } from './language-data.controller';
import { LanguageDataService } from './language-data.service';

@Module({
  controllers: [LanguageDataController],
  providers: [LanguageDataService]
})
export class LanguageDataModule {}
