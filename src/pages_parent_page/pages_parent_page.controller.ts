import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  UseGuards,
  Query
} from '@nestjs/common';
import { JwtGuard } from '../auth/guard';
import { PagesParentPageService } from './pages_parent_page.service';
import {
  newPagesParentName,
  updatedPagesParentName,
  deletePagesParentName,
} from '../types';

@UseGuards(JwtGuard)
@Controller('api/system_tools/pages_parent')
export class PagesParentPageController {
  constructor(private PagesParentPageService: PagesParentPageService) {}

  @Get('pages_parent_data_table')
  getPagesParent(@Query() params: {page_parent_name?:string, hidden?: string }) {
    return this.PagesParentPageService.getPagesParentMainTable(params);
  }

  @Post('pages_parent_data_table_dml')
  postPagesParent(@Body() dto: newPagesParentName) {
    return this.PagesParentPageService.newPagesParent(dto);
  }

  @Put('pages_parent_data_table_dml')
  putPagesParent(@Body() dto: updatedPagesParentName) {
    return this.PagesParentPageService.editPagesParent(dto);
  }

  @Delete('pages_parent_data_table_dml')
  DeletePagesParent(@Body() dto: deletePagesParentName) {
    return this.PagesParentPageService.deletePagesParent(dto);
  }
}
