import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { ProfileController } from './profile/profile.controller';

@Module({
  imports: [],
  controllers: [AppController, UsersController, ProfileController],
  providers: [AppService],
})
export class AppModule {}
