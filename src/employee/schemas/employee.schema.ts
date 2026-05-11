import { Prop,Schema,SchemaFactory } from "@nestjs/mongoose";
import { Document,Schema as MoongooseSchema } from "mongoose";
import { Profile } from "./profile.schema";

@Schema()
export class Employee extends Document{
    @Prop()
    name : string;   
    
    // we will just connect id of profile in employee collection just like we do in sql with foregin key 
    @Prop({type : MoongooseSchema.Types.ObjectId, ref : 'Profile'})
    profile : Profile;

}
export const EmployeeSchema = SchemaFactory.createForClass(Employee);
