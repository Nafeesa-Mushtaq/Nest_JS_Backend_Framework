import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { ProductService } from './product/product.service';
import { ProductController } from './product/product.controller';
import { StudentModule } from './student/student.module';
import { CustomerModule } from './customer/customer.module';
import { NameController } from './name/name.controller';

@Module({
  imports: [StudentModule, CustomerModule],
  controllers: [AppController, UserController, ProductController, NameController],
  providers: [AppService, ProductService],
})
export class AppModule {}
