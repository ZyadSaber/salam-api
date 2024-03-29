import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class newPageName {
  @IsString()
  @IsNotEmpty()
  page_name: string;
  @IsString()
  @IsNotEmpty()
  page_link: string;
  page_disabled?: string;
  run_in_modal?: string;
  page_parent_id?: number;
}

export class editPageName {
  @IsNumber()
  @IsNotEmpty()
  page_id;
  @IsString()
  @IsNotEmpty()
  page_name: string;
  @IsString()
  @IsNotEmpty()
  page_link: string;
  page_disabled?: string;
  run_in_modal?: string;
  page_parent_id?: string;
}

export class deletePageName {
  @IsNumber()
  @IsNotEmpty()
  page_id: number;
}
