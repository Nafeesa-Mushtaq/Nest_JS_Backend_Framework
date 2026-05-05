import { Injectable, NestMiddleware } from '@nestjs/common';
import {Request, Response, NextFunction} from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log(`${req.method} - ${req.originalUrl}`);
    // console.log(`Headers:${JSON.stringify(req.headers)}`);
    console.log(`${req.statusCode}- ${res.statusMessage}`);
    next();
  }
}
