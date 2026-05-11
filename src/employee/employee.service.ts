import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Employee } from './schemas/employee.schema';
import { Model } from 'mongoose';
import { Profile } from './schemas/profile.schema';

@Injectable()
export class EmployeeService { 
    constructor(
        @InjectModel(Employee.name) private employeeModel: Model<Employee>,
        @InjectModel(Profile.name) private readonly profileModel: Model<Profile>
    ) { }

    async createEmployee(data: any): Promise<Employee> {
       const newProfile = await this.profileModel.create({
        age: data.profile.age,
        department: data.profile.department
       })

       const newEmployee = await this.employeeModel.create({
        name: data.name,
        profile: newProfile._id
       });

       return newEmployee;
    }

    async getAll(): Promise<Employee[]> {
        // if we dont use populate we will get only the profile id in employee collection but if we use populate then we will get the complete profile document in employee collection
        return this.employeeModel.find().populate('profile').exec();
    }
}
