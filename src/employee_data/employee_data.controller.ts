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
import { EmployeeDataService } from './employee_data.service';
import { newEmployee, editEmployee, deleteEmployee } from '../types';

@UseGuards(JwtGuard)
@Controller('api/employees/employee_data')
export class EmployeeDataController {
  constructor(private EmployeeDataService: EmployeeDataService) {}

  @Get('employee_table_data')
  getEmployees() {
    return this.EmployeeDataService.getEmployeesMainData();
  }

  @Post('employee_table_data_dml')
  postEmployee(@Body() dto: newEmployee) {
    return this.EmployeeDataService.newEmployee(dto);
  }

  @Put('employee_table_data_dml')
  putEmployee(@Body() dto: editEmployee) {
    return this.EmployeeDataService.editEmployee(dto);
  }

  @Delete('employee_table_data_dml')
  deleteEmployee(@Body() dto: deleteEmployee) {
    return this.EmployeeDataService.deleteEmployee(dto);
  }
}
