import { Module } from '@nestjs/common';
import { EmployeeDataController } from './employee_data.controller';
import { EmployeeDataService } from './employee_data.service';

@Module({
  controllers: [EmployeeDataController],
  providers: [EmployeeDataService]
})
export class EmployeeDataModule {}
