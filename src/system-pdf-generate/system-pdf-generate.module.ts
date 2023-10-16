import { Module } from '@nestjs/common';
import { SystemPdfGenerateController } from './system-pdf-generate.controller';
import { SystemPdfGenerateService } from './system-pdf-generate.service';

@Module({
  controllers: [SystemPdfGenerateController],
  providers: [SystemPdfGenerateService]
})
export class SystemPdfGenerateModule {}
