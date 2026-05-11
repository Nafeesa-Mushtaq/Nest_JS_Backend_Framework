import { Controller,Get, Param, Post, Body} from '@nestjs/common';
import { ProductService } from './product.service';
import { AuthGuard } from 'src/guards/auth/auth.guard';
import { Product } from './schemas/product.schema';

@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService) {}
    
    @Post()
    async createProduct(@Body() data: Partial<Product>) {
        return await this.productService.createProduct(data);
    }

    @Get()
    async getAllProducts() {
        return await this.productService.getAllProducts();
    }
}
