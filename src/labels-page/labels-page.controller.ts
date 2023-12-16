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
import { LabelsPageService } from './labels-page.service';
import { newAndEditLabels, DeleteLabel } from '../types';

@UseGuards(JwtGuard)
@Controller('api/system_tools/labels')
export class LabelsPageController {
  constructor(private LabelsPageService: LabelsPageService) {}

  @Get('label_data_table')
  getLabels(@Query() params?:  {arabic_name?: string, english_name?: string}) {
    return this.LabelsPageService.getLabelMainTable(params);
  }

  @Post('label_data_table_dml')
  postLabels(@Body() dto: newAndEditLabels) {
    return this.LabelsPageService.newLabel(dto);
  }

  @Put('label_data_table_dml')
  putLabels(@Body() dto: newAndEditLabels) {
    return this.LabelsPageService.editLabel(dto);
  }

  @Delete('label_data_table_dml')
  DeleteLabels(@Body() dto: DeleteLabel) {
    return this.LabelsPageService.deleteLabel(dto);
  }
}
