import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtGuard } from '../auth/guard';
import { SystemReportsService } from './system_reports.service';

@UseGuards(JwtGuard)
@Controller('api/system_reports')
export class SystemReportsController {
  constructor(private SystemReportsService: SystemReportsService) {}

  @Get('customer_summary_table')
  getCustomersSummary() {
    return this.SystemReportsService.getCustomersSummary();
  }
}
