import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as CryptoJS from 'crypto-js'

import { User } from './schemas/user.schemas';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private readonly userModel: Model<User>){}
    private readonly logger = new Logger(UserService.name)

    async createUser(dto: CreateUserDto){
        
        dto.password = CryptoJS.AES.encrypt(dto.password, process.env.REGISTER_ENCRYPT_PASS);

        const createUser = new this.userModel(dto);
        await createUser.save();
    };
}
