import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

import { TodoModule } from './todo/todo.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [ConfigModule.forRoot(),
            MongooseModule.forRoot(process.env.DB_CONNECTION_STRING), 
            UserModule,
            TodoModule,],
  controllers: [],
  providers: [],
})

export class AppModule {}
