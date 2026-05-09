import { Prop, Schema,SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type StudentDocument = Student & Document;

@Schema({timestamps: true})
export class Student {
    @Prop({ required: true })
    name: string;   

    @Prop()
    email?: string;

    @Prop({ required: true })
    age: number;

}

export const StudentSchema = SchemaFactory.createForClass(Student);