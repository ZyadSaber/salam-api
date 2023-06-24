import { Body, Controller, Post, Get, Query } from '@nestjs/common';
import { AuthService } from './auth.service';
import { singUpType, getPages } from '../types';

@Controller('api/auth_security')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('sign_up')
  signUn(@Body() dto: singUpType) {
    return this.authService.signup(dto);
  }

  @Post('sign_in')
  signUp(@Body() dto: singUpType) {
    return this.authService.signIn(dto);
  }

  @Get('app_pages')
  appPages(@Query() params: getPages) {
    return this.authService.getPages(params);
  }
}
