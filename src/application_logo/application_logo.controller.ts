import { Controller, Get, Res, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { createReadStream } from 'fs';
import { join } from 'path';
import { JwtGuard } from '../auth/guard';

// @UseGuards(JwtGuard)
@Controller('application_logo')
export class ApplicationLogoController {
  @Get('primary_logo')
  getImage(@Res() res: Response) {
    const file = createReadStream(
      join(process.cwd(), './src/application_logo/assets/logo.png'),
    );
    file.pipe(res);
  }
}
