import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
    constructor(private readonly studentService: StudentService) { };

    @Get()
    getAll() {
        return this.studentService.getAllStudents();
    }

    @Get(':id')
    getById(@Param('id') id: string) {
        return this.studentService.getStudentById(Number(id));
    }

    @Post()
    addNew(@Body() data: { name: string; age: number }) {
        return this.studentService.addNewStudent(data);
    }

    @Put(':id')
    editFull(@Param('id') id: string, @Body() data: { name: string; age: number }) {
        return this.studentService.editStudent(Number(id), data);
    }

    @Patch(':id')
    editSome(@Param('id') id: string, @Body() data: { name: string; age: number }) {
        return this.studentService.patchStudent(Number(id), data);
    }

    @Delete(':id')
    deleteOne(@Param('id') id: string) {
        return this.studentService.deleteStudent(Number(id));
    }
}
