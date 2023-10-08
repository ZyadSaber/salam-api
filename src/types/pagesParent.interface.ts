import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class newPagesParentName {
  @IsString()
  @IsNotEmpty()
  page_parent_name: string;
  @IsString()
  @IsNotEmpty()
  hidden: string;
}

export class updatedPagesParentName {
  @IsString()
  @IsNotEmpty()
  page_parent_id: string;
  @IsString()
  @IsNotEmpty()
  page_parent_name: string;
  @IsString()
  @IsNotEmpty()
  hidden: string;
}

export class deletePagesParentName {
  @IsNumber()
  @IsNotEmpty()
  page_parent_id: string;
}
