import { IsNotEmpty, IsString } from 'class-validator';

export class singUpType {
  @IsString()
  @IsNotEmpty()
  user_name: string;
  @IsString()
  @IsNotEmpty()
  password: string;
  first_name: string;
  last_name: string;
}

export class singInType {
  @IsString()
  @IsNotEmpty()
  user_name: string;
  @IsString()
  @IsNotEmpty()
  password: string;
}
