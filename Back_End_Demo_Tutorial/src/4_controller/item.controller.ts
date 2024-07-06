// Implementarea efectiva a endpointurilor

import { Body, Controller, Param, Post } from '@nestjs/common';
import { CreateItemDTO } from 'src/2_DTO/create-item.dto';
import { UpdateItemDTO } from 'src/2_DTO/update-item.dto';
import { ItemsService } from 'src/3_service/item.service';

@Controller('item')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Post('create')
  async create(@Body() createDTO: CreateItemDTO) {
    return this.itemsService.create(createDTO);
  }

  async update(@Body() updateDTO: UpdateItemDTO) {
    return this.itemsService.update(updateDTO);
  }

  async remove(@Param('id') id: string) {
    return this.itemsService.remove(id);
  }
}
