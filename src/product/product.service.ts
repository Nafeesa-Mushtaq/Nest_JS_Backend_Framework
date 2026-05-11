import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './schemas/product.schema';
import { Model } from 'mongoose';
import { ProductModule } from './product.module';

@Injectable()
export class ProductService {
    constructor(
        @InjectModel(Product.name) private productModel : Model<Product>
    ) {}

    async createProduct(data : Partial<Product>) : Promise<Product> {
        const newProduct = new this.productModel(data);
        return await newProduct.save();
    }

    async getAllProducts() : Promise<Product[]> {
        return await this.productModel.find().exec();
    }
}
