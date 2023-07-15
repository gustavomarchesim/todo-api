import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';

import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService){}

    @Post('register')
    @HttpCode(HttpStatus.OK)
    register(@Body() dto: CreateUserDto){
        return this.userService.register(dto);
    }
}
