import { Module } from '@nestjs/common';
import { ApplicationLogoController } from './application_logo.controller';

@Module({
  controllers: [ApplicationLogoController]
})
export class ApplicationLogoModule {}
