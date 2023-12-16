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

export class updateUserType {
  @IsNotEmpty()
  id: string;
  @IsString()
  @IsNotEmpty()
  user_name: string;
  @IsString()
  @IsNotEmpty()
  password: string;
  first_name: string;
  last_name: string;
}

export class deleteUserType {
  @IsNotEmpty()
  id: string;
}

export class singInType {
  @IsString()
  @IsNotEmpty()
  user_name: string;
  @IsString()
  @IsNotEmpty()
  password: string;
}

export class getPages {
  @IsNotEmpty()
  @IsString()
  role: string;
  @IsNotEmpty()
  @IsString()
  user_name: string;
}
