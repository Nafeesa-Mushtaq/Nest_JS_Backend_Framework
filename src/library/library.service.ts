import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Library } from './schemas/library.schema';
import { Model } from 'mongoose';
import { Book } from './schemas/book.schema';

@Injectable()
export class LibraryService {
    constructor(
        @InjectModel(Book.name) private bookModel: Model<Book>,
        @InjectModel(Library.name) private libraryModel: Model<Library>
    ){}

    async createLibrary(data: any) : Promise<Library> {
        const newBook = await this.bookModel.insertMany(data.books);

        const bookIds = newBook.map(book => book._id);  
        const newLibrary = await this.libraryModel.create({
            name: data.name,
            books: bookIds
        });

        return newLibrary;
    }

    async getLibrary() : Promise<Library[]> {
        return this.libraryModel.find().populate('books').exec();
    }


}
