import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class newExpensesType {
  @IsString()
  @IsNotEmpty()
  expense_type_name: string;
  expense_type_note?: string;
}

export class editExpensesType {
  @IsNumber()
  @IsNotEmpty()
  expense_type_id: number;
  @IsString()
  @IsNotEmpty()
  expense_type_name: string;
  expense_type_note?: string;
}

export class deleteExpensesType {
  @IsNumber()
  @IsNotEmpty()
  expense_type_id: number;
}

export class expensesTypeSearchParams{
  expense_type_name?: string;
  expense_type_note?: string;
}