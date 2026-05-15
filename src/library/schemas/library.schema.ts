import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document, Types} from 'mongoose';
import { Book } from './book.schema';

@Schema()
export class Library extends Document {
  @Prop({required: true})
  name: string;

  @Prop({required: true, type: Types.ObjectId, ref: Book.name})
  books: Types.ObjectId[];
} 

export const LibrarySchema = SchemaFactory.createForClass(Library);