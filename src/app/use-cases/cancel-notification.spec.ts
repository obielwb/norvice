import { Content } from "@app/entities/content";
import { Notification } from "@app/entities/notification";
import { InMemoryNotificationRepository } from "@test/repositories/in-memory-notification-repository";
import { CancelNotification } from "./cancel-notification";
import { NotificationNotFound } from "./errors/notification-not-found";


describe('cancel notification', () => {
  it('should be able to cancel a notification', async () => {
    const notificationRepository = new InMemoryNotificationRepository(); 
    const cancelNotification = new CancelNotification(notificationRepository);

    const notification = new Notification({
      category: 'social',
      content: new Content('Nova solicitação'),
      recipientId: 'example-recipient-id'
    })

    await notificationRepository.create(notification);

    await cancelNotification.execute({
      notificationId: notification.id
    });

    expect(notificationRepository.notifications[0].canceledAt).toEqual(expect.any(Date))
  });

  it('shoud not be able to cancel a non existing notification', async () => {
    const notificationRepository = new InMemoryNotificationRepository(); 
    const cancelNotification = new CancelNotification(notificationRepository);

    expect(() => {
      return cancelNotification.execute({
        notificationId: 'fake-notification-id'
      })
    }).rejects.toThrow(NotificationNotFound)
  })
})