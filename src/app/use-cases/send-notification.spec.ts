import { InMemoryNotificationRepository } from "test/repositories/in-memory-notification-repository";
import { SendNotification } from "./send-notification";


describe('send notification', () => {
  it('should send a notification', async () => {
    const notificationRepository = new InMemoryNotificationRepository(); 
    const sendNotification = new SendNotification(notificationRepository);

    const { notification } = await sendNotification.execute({
      content: 'This is a notification',
      category: 'notification',
      recipientId: '123',
    });

    expect(notificationRepository.notifications).toHaveLength(1);
    expect(notificationRepository.notifications[0]).toEqual(notification);
  });
})