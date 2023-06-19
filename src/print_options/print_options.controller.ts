import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { JwtGuard } from '../auth/guard';
import { PrintOptionsService } from './print_options.service';
import {
  newPrintOptions,
  editPrintOptions,
  deletePrintOptions,
} from '../types';

@UseGuards(JwtGuard)
@Controller('api/basic_data/print_options')
export class PrintOptionsController {
  constructor(private printOptionsService: PrintOptionsService) {}

  @Get('print_options_table_data')
  getPrintOptions() {
    return this.printOptionsService.getPrintOptionsMainTable();
  }

  @Get('print_options_lins')
  getCustomerList() {
    return this.printOptionsService.getPrintOptionsList();
  }

  @Post('print_options_table_data_dml')
  postPrintOptions(@Body() dto: newPrintOptions) {
    return this.printOptionsService.newPrintOptions(dto);
  }

  @Put('print_options_table_data_dml')
  putPrintOptions(@Body() dto: editPrintOptions) {
    return this.printOptionsService.putPrintOption(dto);
  }

  @Delete('print_options_table_data_dml')
  deletePrintOptions(@Body() dto: deletePrintOptions) {
    return this.printOptionsService.deletePrintOption(dto);
  }
}
