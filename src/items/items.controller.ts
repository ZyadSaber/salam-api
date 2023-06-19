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
import { ItemsService } from './items.service';
import { newItem, editItem, deleteItem } from '../types';

@UseGuards(JwtGuard)
@Controller('api/basic_data/items')
export class ItemsController {
  constructor(private itemsService: ItemsService) {}

  @Get('items_table_data')
  getItems() {
    return this.itemsService.getItemsMainTable();
  }

  @Get('items_list')
  getItemsList() {
    return this.itemsService.getItemsList();
  }

  @Post('items_table_data_dml')
  postItems(@Body() dto: newItem) {
    return this.itemsService.newItem(dto);
  }

  @Put('items_table_data_dml')
  putItems(@Body() dto: editItem) {
    return this.itemsService.putItem(dto);
  }

  @Delete('items_table_data_dml')
  deleteItem(@Body() dto: deleteItem) {
    return this.itemsService.deleteItem(dto);
  }
}
