import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class newPrintOptions {
  @IsString()
  @IsNotEmpty()
  print_option_name: string;
  print_option_note?: string;
}

export class editPrintOptions {
  @IsNumber()
  @IsNotEmpty()
  print_option_id: number;
  @IsString()
  @IsNotEmpty()
  print_option_name: string;
  print_option_note?: string;
}

export class deletePrintOptions {
  @IsNumber()
  @IsNotEmpty()
  print_option_id: number;
}
