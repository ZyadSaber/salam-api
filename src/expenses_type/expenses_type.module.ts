import { Module } from '@nestjs/common';
import { ExpensesTypeController } from './expenses_type.controller';
import { ExpensesTypeService } from './expenses_type.service';

@Module({
  controllers: [ExpensesTypeController],
  providers: [ExpensesTypeService]
})
export class ExpensesTypeModule {}
