import { Prop,Schema,SchemaFactory } from "@nestjs/mongoose";
import { Document,Schema as MoongooseSchema ,Types} from "mongoose";
import { Profile } from "./profile.schema";

@Schema()
export class Employee extends Document{
    @Prop()
    name : string;   
    
    // we will just connect id of profile in employee collection just like we do in sql with foregin key 
    @Prop({required: true, type: Types.ObjectId, ref: Profile.name})
    profile : Types.ObjectId;

}
export const EmployeeSchema = SchemaFactory.createForClass(Employee);
