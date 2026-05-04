import { IsInt, IsString } from "class-validator";

// its purpose is to validate the data received from the client side
export class CreateCustomerdto {
    @IsString()
    name: string;
    @IsInt()
    age: number;
}