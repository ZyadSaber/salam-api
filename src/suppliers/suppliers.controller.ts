import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { JwtGuard } from '../auth/guard';
import { SuppliersService } from './suppliers.service';
import { newSupplier, editSupplier, deleteSupplier, supplierParam } from '../types';

@UseGuards(JwtGuard)
@Controller('api/basic_data/suppliers')
export class SuppliersController {
  constructor(private suppliersService: SuppliersService) {}
  @Get('suppliers_table_data')
  getSuppliers(@Query() params: supplierParam) {
    return this.suppliersService.getSuppliersMainTable(params);
  }

  @Get('suppliers_list')
  getSuppliersList() {
    return this.suppliersService.getSuppliersList();
  }

  @Post('suppliers_table_data_dml')
  postSuppliers(@Body() dto: newSupplier) {
    return this.suppliersService.newSupplier(dto);
  }

  @Put('suppliers_table_data_dml')
  putSupplier(@Body() dto: editSupplier) {
    return this.suppliersService.putSupplier(dto);
  }

  @Delete('suppliers_table_data_dml')
  deleteSupplier(@Body() dto: deleteSupplier) {
    return this.suppliersService.deleteSupplier(dto);
  }
}
