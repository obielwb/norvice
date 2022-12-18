import { Module } from '@nestjs/common';
import { SendNotification } from 'src/app/use-cases/send-notification';
import { DatabaseModule } from '../database/database.module';
import { NotificationsController } from './controller/notification.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [
    NotificationsController
  ],
  providers: [SendNotification],
})
export class HttpModule {}
