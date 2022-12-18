import { Notification } from "@app/entities/notification";
import { NotificationRepository } from "@app/repositories/notification-repository";

class InMemoryNotificationRepository implements NotificationRepository {
  public notifications: Notification[] = [];

  async create(notification: Notification): Promise<void> {
    this.notifications.push(notification);
  }
}

export { InMemoryNotificationRepository };