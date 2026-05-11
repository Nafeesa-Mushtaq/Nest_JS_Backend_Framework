import { Schema,Prop } from "@nestjs/mongoose";

@Schema()
export class Address{
    @Prop()
    street: string;

    @Prop()
    city:string;

    @Prop()
    state: string;
}