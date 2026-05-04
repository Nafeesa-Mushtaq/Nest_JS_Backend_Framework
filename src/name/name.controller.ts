import { Body, Controller, Post } from '@nestjs/common';
import { UppercasePipe } from 'src/common/pipes/uppercase/uppercase.pipe';

@Controller('name')
export class NameController {
    @Post()
    transformName(@Body('name',new UppercasePipe()) name:string){
        return {message: `Your name is ${name}`}
    }
}
