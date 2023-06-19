import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class newEmployee {
  @IsString()
  @IsNotEmpty()
  employee_name: string;
  @IsNumber()
  @IsNotEmpty()
  employee_salary: number;
  @IsString()
  @IsNotEmpty()
  employee_attendance_time: string;
  @IsString()
  @IsNotEmpty()
  employee_leaving_time: string;
  employee_address?: string;
  employee_phone?: number;
  employee_mobile?: number;
  @IsString()
  @IsNotEmpty()
  employee_job_title: string;
  employee_email?: string;
  date_of_hiring?: string;
}

export class editEmployee extends newEmployee {
  @IsNumber()
  @IsNotEmpty()
  employee_id: number;
}
export class deleteEmployee {
 @IsNumber()
  @IsNotEmpty()
  employee_id: number;
}
