import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema,  } from './schemas/user.schema';

@Module({
  // which ever is the class name will become the schema name in DB and the schema will be created using the UserSchema
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
  providers: [UserService]
})
export class UserModule {}
