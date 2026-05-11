import { Controller,Post,Body,Param, Get } from '@nestjs/common';
import { Employee } from './schemas/employee.schema';
import { EmployeeService } from './employee.service';

@Controller('employee')
export class EmployeeController {
    constructor(private readonly employeeService: EmployeeService) {}

    @Post()
    async createEmployee(@Body() data: any){
        return this.employeeService.createEmployee(data);
    }
    @Get()
    async getAllEmployees(){
        return this.employeeService.getAll();
    }
}
