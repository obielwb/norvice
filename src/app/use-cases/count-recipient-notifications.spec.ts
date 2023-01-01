import { makeNotification } from "@test/factories/notification-factory";
import { InMemoryNotificationRepository } from "@test/repositories/in-memory-notification-repository";
import { CountRecipientNotifications } from "./count-recipient-notifications";


describe('Count recipient notifications', () => {
  it('should be able to count recipient notifications', async () => {
    const notificationRepository = new InMemoryNotificationRepository(); 
    const countRecipientNotification = new CountRecipientNotifications(notificationRepository);


    await notificationRepository.create(makeNotification({ 
      recipientId: 'recipient-1'
    }));
  
    await notificationRepository.create(makeNotification({ 
      recipientId: 'recipient-1'
    }));
  
    await notificationRepository.create(makeNotification({ 
      recipientId: 'recipient-2'
    }));

    const { count } = await countRecipientNotification.execute({
      recipientId: 'recipient-1'
    })

    expect(count).toEqual(2)
  });
})