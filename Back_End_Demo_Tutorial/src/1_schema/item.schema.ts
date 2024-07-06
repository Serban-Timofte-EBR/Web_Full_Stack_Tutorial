// Schama este echivalentul documentului din MongoDB ( echivalentul unei tabele )

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Item extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  quantity: number;

  @Prop({ required: true })
  price: number;
}

export const ItemSchema = SchemaFactory.createForClass(Item);
