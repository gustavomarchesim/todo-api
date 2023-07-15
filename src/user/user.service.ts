import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { User } from './schemas/user.schemas';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private readonly userModel : Model<User>){}

    async register(dto: CreateUserDto){

        const createUser = new this.userModel(dto);
        return createUser.save();
    };
}
