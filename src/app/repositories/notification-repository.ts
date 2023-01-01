import { Notification } from "../entities/notification";

abstract class NotificationRepository {
  abstract create(notification: Notification): Promise<void>;
  abstract findById(notificationId: string): Promise<Notification | null>;
}

export { NotificationRepository };