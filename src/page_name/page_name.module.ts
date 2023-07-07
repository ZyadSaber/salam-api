import { Module } from '@nestjs/common';
import { PageNameController } from './page_name.controller';
import { PageNameService } from './page_name.service';

@Module({
  controllers: [PageNameController],
  providers: [PageNameService]
})
export class PageNameModule {}
