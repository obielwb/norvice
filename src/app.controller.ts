import { Controller, Get } from '@nestjs/common';
import { Post } from '@nestjs/common/decorators/http/request-mapping.decorator';
import { PrismaService } from './prisma.service';
import { randomUUID } from 'crypto';
import { Body } from '@nestjs/common/decorators/http/route-params.decorator';
import { CreateNotificationBody } from './create-notification-body.ts';

@Controller('notifications')
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  list() {
    return this.prisma.notification.findMany();
  }

  @Post()
  async createNotification(@Body() body: CreateNotificationBody) {
    const { content, category, recipientId } = body;

    await this.prisma.notification.create({
      data: {
        id: randomUUID(),
        content: content, 
        category: category,
        recipientId: recipientId
      }
    });
  }
}
