import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
    private products = [
        { id: 1, name: 'Product 1', price: 10 },
        { id: 2, name: 'Product 2', price: 20 },
        { id: 3, name: 'Product 3', price: 30 },
    ]

    getAllProducts() {
        return this.products;
    }
    getProductById(id: number) {
        return this.products.find(product => product.id === id);
    }
    getProductsByPrice(price: number) {
        return this.products.filter(product => product.price == price);
    }
}
