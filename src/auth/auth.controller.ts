import {
  Body,
  Controller,
  Post,
  Put,
  Delete,
  Get,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { singUpType } from '../types';
import { JwtGuard } from './guard';

@Controller('api/auth_security')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('sign_in')
  signUp(@Body() dto: singUpType) {
    return this.authService.signIn(dto);
  }

  @UseGuards(JwtGuard)
  @Post('users_info_dml')
  createUser(@Body() dto: singUpType) {
    return this.authService.signup(dto);
  }
  @UseGuards(JwtGuard)
  @Put('users_info_dml')
  EditUser(@Body() dto: singUpType) {
    return this.authService.signup(dto);
  }
  @UseGuards(JwtGuard)
  @Delete('users_info_dml')
  deleteUser(@Body() dto: singUpType) {
    return this.authService.signup(dto);
  }

  @UseGuards(JwtGuard)
  @Get('users_info')
  appPages() {
    return this.authService.getUsers();
  }
}
