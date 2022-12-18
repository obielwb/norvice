import { Content } from "../entities/content";
import { Notification } from "../entities/notification";
import { NotificationRepository } from "../repositories/notification-repository";

interface SendNotificationRequest {
  recipientId: string; 
  content: string;
  category: string;
}

interface SendNotificationResponse {
  notification: Notification;
}

export class SendNotification {

  constructor(private notificationRepository: NotificationRepository) {}

  async execute(request: SendNotificationRequest): Promise<SendNotificationResponse> {
    const notification = new Notification({
      recipientId: request.recipientId,
      content: new Content(request.content),
      category: request.category,
    });

    await this.notificationRepository.create(notification);

    return {
       notification, 
    };
  }
}