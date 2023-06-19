import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { JwtGuard } from '../auth/guard';
import { UsersService } from './users.service';

@UseGuards(JwtGuard)
@Controller('salam_users')
export class UsersController {
  constructor(private usersServices: UsersService) {}
  @Get('get_users_table_data')
  getMe(@Req() req: Request) {
    return this.usersServices.getUsersData(req.query);
  }
}
