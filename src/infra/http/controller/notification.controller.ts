import { Controller, Get } from '@nestjs/common';
import { Post } from '@nestjs/common/decorators/http/request-mapping.decorator';
import { Body } from '@nestjs/common/decorators/http/route-params.decorator';
import { SendNotification } from 'src/app/use-cases/send-notification';
import { CreateNotificationBody } from '../dtos/create-notification-body';
import { NotificationViewModel } from '../view-models/notification-view-model';

@Controller('notifications')
export class NotificationsController {
  constructor(
    private readonly sendNotification: SendNotification,
  ) { }

  @Post()
  async createNotification(@Body() body: CreateNotificationBody) {
    const { content, category, recipientId } = body;

    const { notification } = await this.sendNotification.execute({
      content,
      category,
      recipientId,
    });

    return { 
      notification: NotificationViewModel.toHTTP(notification)
    };
  }
}
