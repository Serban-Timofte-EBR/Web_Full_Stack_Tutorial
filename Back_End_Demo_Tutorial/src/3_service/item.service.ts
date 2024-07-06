import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Item } from 'src/1_schema/item.schema';
import { CreateItemDTO } from 'src/2_DTO/create-item.dto';
import { UpdateItemDTO } from 'src/2_DTO/update-item.dto';

// Implementeaza logica de business, fara acces direct la endpoints
@Injectable()
export class ItemsService {
  constructor(@InjectModel(Item.name) private itemModel: Model<Item>) {}

  async create(createDTO: CreateItemDTO): Promise<Item> {
    const createdItem = new this.itemModel(createDTO);
    return createdItem.save();
  }

  async update(updateDTO: UpdateItemDTO): Promise<Item> {
    const updateItem = await this.itemModel
      .findByIdAndUpdate(updateDTO.name, updateDTO, { new: true })
      .exec();

    if (!updateItem) {
      throw new NotFoundException('Item not found!');
    }

    return updateItem;
  }

  async findAll(): Promise<Item[]> {
    return this.itemModel.find().exec();
  }

  async findOne(id: string): Promise<Item> {
    return this.itemModel.findById(id);
  }

  async remove(id: string): Promise<Item> {
    const rmvItem = await this.itemModel.findByIdAndDelete(id).exec();
    if (!rmvItem) {
      throw new NotFoundException('Item not found!');
    }
    return rmvItem;
  }
}
