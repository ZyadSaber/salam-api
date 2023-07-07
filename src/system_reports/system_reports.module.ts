import { Module } from '@nestjs/common';
import { SystemReportsService } from './system_reports.service';
import { SystemReportsController } from './system_reports.controller';

@Module({
  providers: [SystemReportsService],
  controllers: [SystemReportsController]
})
export class SystemReportsModule {}
