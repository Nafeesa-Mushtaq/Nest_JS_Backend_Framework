import { Controller,Get, Post,Body } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CreateCustomerdto } from './dto/create-customer.dto';

@Controller('customer')
export class CustomerController {
    constructor(private readonly customerService : CustomerService){}

    @Get()
    getAll(){
        return this.customerService.getAllCustomers;
    }

    @Post()
    createOne(@Body() CreateCustomerDto : CreateCustomerdto){
        return this.customerService.addCustomers(CreateCustomerDto);
    }
}
