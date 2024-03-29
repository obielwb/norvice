import { Injectable } from "@nestjs/common";
import { Notification } from "src/app/entities/notification";
import { NotificationRepository } from "src/app/repositories/notification-repository";
import { PrismaNotificationMapper } from "../mappers/prisma-notification-mapper";
import { PrismaService } from "../prisma.service";

@Injectable()
export class PrismaNotificationsRepository implements NotificationRepository {
  constructor (private readonly prismaService: PrismaService) {}
  
  async findById(notificationId: string): Promise<Notification | null> {
    throw new Error("Method not implemented.");
  }
  
  async create(notification: Notification): Promise<void> {
    const raw = PrismaNotificationMapper.toPrisma(notification);
    
    await this.prismaService.notification.create({
      data: raw
    });
  }

  async save(notification: Notification): Promise<void> {
    throw new Error("Method not implemented.");
  }
}