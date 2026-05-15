import { Controller ,Body,Param,Post,Get} from '@nestjs/common';
import { Library } from './schemas/library.schema';
import { LibraryService } from './library.service';

@Controller('library')
export class LibraryController {
    constructor(private libraryService: LibraryService){}

    @Post()
    async createLibrary(@Body() data: any) : Promise<Library> {
        return this.libraryService.createLibrary(data);
    }

    @Get()
    async getLibrary() : Promise<Library[]> {
        return this.libraryService.getLibrary();
    }

}
