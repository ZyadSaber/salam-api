import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { JwtGuard } from '../auth/guard';
import { ChartsService } from './charts.service';

@UseGuards(JwtGuard)
@Controller('api/charts')
export class ChartsController {
  constructor(private ChartsService: ChartsService) {}

  @Get('invoices_query')
  getInvoicesData() {
    return this.ChartsService.getInvoicesChartData();
  }
}
