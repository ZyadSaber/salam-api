import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class newAndEditLabels {
  @IsString()
  @IsNotEmpty()
  language_code: string;
  @IsString()
  @IsNotEmpty()
  english_name: string;
  @IsString()
  @IsNotEmpty()
  arabic_name: string;
}

export class DeleteLabel {
  @IsNotEmpty()
  @IsString()
  language_code: string;
}
