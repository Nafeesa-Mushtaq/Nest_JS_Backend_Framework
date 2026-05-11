import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private readonly userModel: Model<User>) { }

    async createUSer(data : Partial<User>): Promise<User> {
        const newUSer = new this.userModel(data);
        return newUSer.save();
    }

    async getAllUsers(): Promise<User[]>{
        return this.userModel.find().exec();
    }

    async findOne(id : string): Promise<User | null>{
        return this.userModel.findById(id).exec();
    }

    
}
