import Notification from "../../../src/domain/notifications/notification";

describe('Notification entity', () => {
    test('create a notification', () => {
        let notification = Notification.create("notification.name");
        expect(notification.name).toBe("notification.name");
        expect(notification.isEnabled).toBe(true);
        expect(notification.types.length).toBe(0);
    })
})