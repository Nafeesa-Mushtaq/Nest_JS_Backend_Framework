import { Module } from '@nestjs/common';
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

@Module({
  imports: [StudentModule, CustomerModule],
  controllers: [AppController, UserController, ProductController, NameController, UserRolesController, ExceptionController],
  providers: [AppService, ProductService],
})
export class AppModule {}
