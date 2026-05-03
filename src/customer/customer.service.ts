import { Injectable } from '@nestjs/common';
import { Customer } from './interfaces/customer.interface';
import { CreateCustomerdto } from './dto/create-customer.dto';

@Injectable()
export class CustomerService {
    private customers: Customer[] = [];

    getAllCustomers(): Customer[]{
        return this.customers;
    }

    addCustomers(createCustomerDTO: CreateCustomerdto): Customer {
        const newCustomer : Customer ={
            id: Date.now(),
            ...createCustomerDTO,
        }
        this.customers.push(newCustomer);
        return newCustomer;
    }


}
