import { SendNotification } from "./send-notification";

describe('send notification', () => {
  it('should send a notification', async () => {
    const sendNotification = new SendNotification();

    const { notification } = await sendNotification.execute({
      content: 'This is a notification',
      category: 'notification',
      recipientId: '123',
    });

    expect(notification).toBeTruthy();
  });
})