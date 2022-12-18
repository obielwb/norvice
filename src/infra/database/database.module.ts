import { Module } from '@nestjs/common';
import { NotificationRepository } from 'src/app/repositories/notification-repository';
import { PrismaService } from './prisma/prisma.service';
import { PrismaNotificationsRepository } from './prisma/repositories/prisma-notifications-respository';

@Module({
  providers: [
    PrismaService, 
    {
      provide: NotificationRepository,
      useClass: PrismaNotificationsRepository
    }
  ],
  exports: [
    NotificationRepository
  ]
})
export class DatabaseModule {}