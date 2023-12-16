import {
  Body,
  Controller,
  Post,
  Put,
  Delete,
  Get,
  UseGuards,
  Query,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { singUpType, updateUserType, deleteUserType } from '../types';
import { JwtGuard } from './guard';

@Controller('api/auth_security')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('sign_in')
  signUp(@Body() dto: singUpType) {
    return this.authService.signIn(dto);
  }

  @UseGuards(JwtGuard)
  @Get('users_info')
  appPages(@Query() params?: { user_name?: string; name?: string }) {
    return this.authService.getUsers(params);
  }

  @UseGuards(JwtGuard)
  @Post('users_info_dml')
  createUser(@Body() dto: singUpType) {
    return this.authService.signup(dto);
  }

  @UseGuards(JwtGuard)
  @Put('users_info_dml')
  EditUser(@Body() dto: updateUserType) {
    return this.authService.updateUser(dto);
  }
  @UseGuards(JwtGuard)
  @Delete('users_info_dml')
  deleteUser(@Body() dto: deleteUserType) {
    return this.authService.deleteUser(dto);
  }

  @UseGuards(JwtGuard)
  @Get('salam_pages')
  salamPages(@Query() params: { user_name: string }) {
    return this.authService.getUserPage(params);
  }

  @UseGuards(JwtGuard)
  @Post('user_page_permissions')
  updatePagesPermissions(@Body() dto: any) {
    return this.authService.updatePagesPermissions(dto);
  }
}
