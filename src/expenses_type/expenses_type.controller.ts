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
import { ExpensesTypeService } from './expenses_type.service';
import {
  newExpensesType,
  editExpensesType,
  deleteExpensesType,
  expensesTypeSearchParams
} from '../types';

@UseGuards(JwtGuard)
@Controller('api/basic_data/expenses_type')
export class ExpensesTypeController {
  constructor(private expensesTypeService: ExpensesTypeService) {}

  @Get('expenses_type_table_data')
  getCustomers(@Query() params: expensesTypeSearchParams) {
    return this.expensesTypeService.getExpensesTypeData(params);
  }

  @Post('expenses_type_table_data_dml')
  postExpensesType(@Body() dto: newExpensesType) {
    return this.expensesTypeService.newExpensesType(dto);
  }

  @Put('expenses_type_table_data_dml')
  putExpensesType(@Body() dto: editExpensesType) {
    return this.expensesTypeService.editExpensesType(dto);
  }

  @Delete('expenses_type_table_data_dml')
  deleteExpensesType(@Body() dto: deleteExpensesType) {
    return this.expensesTypeService.DeleteExpensesType(dto);
  }
}
