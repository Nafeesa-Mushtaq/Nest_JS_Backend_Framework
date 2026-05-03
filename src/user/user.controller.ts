import { Controller, Get } from '@nestjs/common';

// if a function name start with @ it means it is a decorater
@Controller('user')
export class UserController {
    @Get()
    getUser() {
        return 'My  Controller is used successfully using decoraters in nest js!';
    }
}
// This is simply saying that when the user will hit the get request to the 'user' endpoint than run this function