import { Module } from '@nestjs/common';
import { PagesParentPageController } from './pages_parent_page.controller';
import { PagesParentPageService } from './pages_parent_page.service';

@Module({
  controllers: [PagesParentPageController],
  providers: [PagesParentPageService]
})
export class PagesParentPageModule {}
