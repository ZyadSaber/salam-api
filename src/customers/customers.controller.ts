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
import { CustomersService } from './customers.service';
import { newCustomer, editCustomer, deleteCustomer } from '../types';

@UseGuards(JwtGuard)
@Controller('api/basic_data/customers')
export class CustomersController {
  constructor(private CustomersService: CustomersService) {}
  @Get('customers_table_data')
  getCustomers() {
    return this.CustomersService.getCustomersMainTable();
  }

  @Get('customers_list')
  getCustomerList() {
    return this.CustomersService.getCustomersList();
  }

  @Post('customers_table_data_dml')
  postCustomers(@Body() dto: newCustomer) {
    return this.CustomersService.newCustomer(dto);
  }

  @Put('customers_table_data_dml')
  putCustomer(@Body() dto: editCustomer) {
    return this.CustomersService.putCustomer(dto);
  }

  @Delete('customers_table_data_dml')
  deleteCustomer(@Body() dto: deleteCustomer) {
    return this.CustomersService.deleteCustomer(dto);
  }
}
