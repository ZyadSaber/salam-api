import { Module } from '@nestjs/common';
import { PrintOptionsService } from './print_options.service';
import { PrintOptionsController } from './print_options.controller';

@Module({
  providers: [PrintOptionsService],
  controllers: [PrintOptionsController]
})
export class PrintOptionsModule {}
