import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class EvService {
    constructor(private readonly configService: ConfigService) {}

    getDataurl(){
        return this.configService.get<string>('DATABASE_URL');
    }
}
