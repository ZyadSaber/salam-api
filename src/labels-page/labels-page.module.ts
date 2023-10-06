import { Module } from '@nestjs/common';
import { LabelsPageController } from './labels-page.controller';
import { LabelsPageService } from './labels-page.service';

@Module({
  controllers: [LabelsPageController],
  providers: [LabelsPageService]
})
export class LabelsPageModule {}
