import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { JwtGuard } from '../auth/guard';
import { SystemReportsService } from './system_reports.service';

@UseGuards(JwtGuard)
@Controller('api/system_reports')
export class SystemReportsController {
  constructor(private SystemReportsService: SystemReportsService) {}

  @Get('customer_summary_table')
  getCustomersSummary(@Query() Params: { customer_id: string }) {
    return this.SystemReportsService.getCustomersSummary(Params);
  }

  @Get('supplier_summary_table')
  getSuppliersSummary(@Query() Params: { supplier_id: string }) {
    return this.SystemReportsService.getSuppliersSummary(Params);
  }
}
