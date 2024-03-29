import { Notification } from "@app/entities/notification";
import { NotificationRepository } from "@app/repositories/notification-repository";

class InMemoryNotificationRepository implements NotificationRepository {
  
  public notifications: Notification[] = [];

  async findById(notificationId: string): Promise<Notification | null> {
    const notification = this.notifications.find(item => item.id === notificationId)
    
    if (!notification) {
      return null;
    }

    return notification;
  }

  async countManyByRecipientId(recipientId: string): Promise<number> {
    return this.notifications.filter(notification => notification.recipientId == recipientId).length
  }

  async save(notification: Notification): Promise<void> {
    const notificationIndex = this.notifications.findIndex(
      (item) => item.id === notification.id
    )

    if (notificationIndex >= 0) {
      this.notifications[notificationIndex] = notification
    }
  }

  async create(notification: Notification): Promise<void> {
    this.notifications.push(notification);
  }
}

export { InMemoryNotificationRepository };