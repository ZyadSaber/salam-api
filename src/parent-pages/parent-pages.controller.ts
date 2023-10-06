import {
    Body,
    Controller,
    Delete,
    Get,
    Post,
    Put,
    UseGuards,
  } from '@nestjs/common';
  import { JwtGuard } from '../auth/guard';
  import { ParentPagesService } from './parent-pages.service';
  import { newPageName, editPageName, deletePageName } from '../types';

@UseGuards(JwtGuard)
@Controller('api/system_tools/parent_pages')
export class ParentPagesController {
    constructor(private ParentPagesService: ParentPagesService) {}

    @Get('page_name_table_data')
    getPageParents() {
        return this.ParentPagesService.getParentPagesList();
    }
}
