import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { ProductService } from './product/product.service';
import { ProductController } from './product/product.controller';
import { StudentModule } from './student/student.module';
import { CustomerModule } from './customer/customer.module';
import { NameController } from './name/name.controller';
import { UserRolesController } from './user-roles/user-roles.controller';
import { ExceptionController } from './exception/exception.controller';
import { LoggerMiddleware } from './middleware/logger/logger.middleware';
import { DatabaseController } from './database/database.controller';
import { DatabaseService } from './database/database.service';
import { EvController } from './ev/ev.controller';
import { EvService } from './ev/ev.service';
import { ConfigModule } from '@nestjs/config';

import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [StudentModule, CustomerModule, ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGODB_URI!),  
  ],
  controllers: [AppController, UserController, ProductController, NameController, UserRolesController, ExceptionController, DatabaseController, EvController],
  providers: [AppService, ProductService, DatabaseService, EvService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
      consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
