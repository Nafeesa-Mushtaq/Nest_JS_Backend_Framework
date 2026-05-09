import { Body, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { get } from 'http';
import { NotFoundError } from 'rxjs';
import { Student, StudentDocument } from './student.schema';
import { Model } from 'mongoose';

@Injectable()
export class StudentService {
  constructor(
    @InjectModel(Student.name) private studentModel: Model<StudentDocument>
  ) {}

  async createStudent(data: Partial<Student>): Promise<Student> {
    const newStudent = new this.studentModel(data);
    return newStudent.save();
  }
   
  async getAllStudents(): Promise<Student[]> {
    // find() finds the data in the DB and exec() executes the query handles the promise in a better way
    return this.studentModel.find().exec();
  }

  async getStudentById(id: string): Promise<Student | null> {
    const student = await this.studentModel.findById(id).exec();
    return student;
  }

  async updateStudent(id: string, data: Partial<Student>): Promise<Student> {
    const updatedStudent = await this.studentModel.findByIdAndUpdate(id, data, { new: true }).exec();
    if (!updatedStudent) {
      throw new NotFoundException(`Student with id ${id} not found`);
    }   
    return updatedStudent;
}
}
