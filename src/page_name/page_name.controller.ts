import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  UseGuards,
  Query,
} from '@nestjs/common';
import { JwtGuard } from '../auth/guard';
import { PageNameService } from './page_name.service';
import { newPageName, editPageName, deletePageName } from '../types';

@UseGuards(JwtGuard)
@Controller('api/system_tools/page_name')
export class PageNameController {
  constructor(private PageNameService: PageNameService) {}

  @Get('page_name_table_data')
  getPageName() {
    return this.PageNameService.getPageNameMainTable();
  }

  @Get('page_name_list_to_view')
  getLinkedPages(@Query() params: { user_id: number }) {
    return this.PageNameService.getLinkedPages(params);
  }

  @Post('page_name_table_data_dml')
  postPageName(@Body() dto: newPageName) {
    return this.PageNameService.newPageName(dto);
  }

  @Put('page_name_table_data_dml')
  putPageName(@Body() dto: editPageName) {
    return this.PageNameService.editPageName(dto);
  }

  @Delete('page_name_table_data_dml')
  DeletePageName(@Body() dto: deletePageName) {
    return this.PageNameService.deletePageName(dto);
  }
}
