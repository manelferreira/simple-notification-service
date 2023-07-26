import Notification from "../../../src/domain/notifications/notification";

describe('Notification entity', () => {
    test('create a notification', () => {
        let notification = Notification.create("notification.name");
        expect(notification.name).toBe("notification.name");
        expect(notification.isEnabled).toBe(true);
        expect(notification.typesCount).toBe(0);
    })

    test('add email notification', () => {
        let notification = Notification.create("simple.notification");
        notification.addEmailNotification("email subject", "email body");
        
        const emailNotification = notification.getEmailNotification();

        expect(notification.typesCount).toBe(1);
        expect(emailNotification.subject).toBe("email subject");
        expect(emailNotification.body).toBe("email body");
        expect(notification.mustBeSentViaEmail()).toBe(true);
    })
})