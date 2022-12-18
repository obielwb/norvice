import { Notification } from "src/app/entities/notification";
import { NotificationRepository } from "src/app/repositories/notification-repository";

class InMemoryNotificationRepository implements NotificationRepository {
  public notifications: Notification[] = [];

  async create(notification: Notification): Promise<void> {
    this.notifications.push(notification);
  }
}

export { InMemoryNotificationRepository };