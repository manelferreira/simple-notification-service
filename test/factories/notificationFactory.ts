import Notification from "../../src/domain/notifications/notification";

export default class NotificationFactory {
    static createWithEmailType() {
        const notification = Notification.create("some.email.notification");
        notification.addEmailNotification("subject", "body");
        return notification;
    }
}