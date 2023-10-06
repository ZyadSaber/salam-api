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
import { LabelsPageService } from './labels-page.service';
// import { newPageName, editPageName, deletePageName } from '../types';

@UseGuards(JwtGuard)
@Controller('api/system_tools/labels')
export class LabelsPageController {
  constructor(private LabelsPageService: LabelsPageService) {}

  @Get('label_data_table')
  getPageName() {
    return this.LabelsPageService.getLabelMainTable();
  }

  @Post('label_data_table_dml')
  postPageName(@Body() dto: any) {
    return this.LabelsPageService.newLabel(dto);
  }

  @Put('page_name_table_data_dml')
  putPageName(@Body() dto: any) {
    return this.LabelsPageService.editLabel(dto);
  }

  @Delete('page_name_table_data_dml')
  DeletePageName(@Body() dto: any) {
    // return this.LabelsPageService.deletePageName(dto);
  }
}
