import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types  } from "mongoose";
import { ref } from "process";

Schema({timestamps: true})
export class Developers extends Document {
    @Prop({required: true})
    name: string;   
    
    @Prop({type: [{type: Types.ObjectId, ref: 'Project'}]})
    projects: Types.ObjectId[];
}

export const DeveloperSchema = SchemaFactory.createForClass(Developers);