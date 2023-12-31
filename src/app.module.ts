import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ConfigModule.forRoot(),
            MongooseModule.forRoot(process.env.DB_CONNECTION_STRING), 
            UserModule, AuthModule],
  controllers: [],
  providers: [],
})

export class AppModule {}
