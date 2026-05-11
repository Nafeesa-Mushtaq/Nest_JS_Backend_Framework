import { Controller, Get, Post,Body, Param} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './schemas/user.schema';

// if a function name start with @ it means it is a decorater
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService){}

    @Post()
    newUser(@Body() data: Partial<User>){
        return this.userService.createUSer(data);
    }

    @Get()
    getUser() {
        return this.userService.getAllUsers();
    }

    @Get(':id')
    getUserById(@Param('id') id: string) {
        return this.userService.findOne(id);
    }
}
// This is simply saying that when the user will hit the get request to the 'user' endpoint than run this function