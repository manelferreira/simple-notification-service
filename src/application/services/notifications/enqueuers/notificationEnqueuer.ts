import { User } from "../../../../domain/notifiables/user";
import Notification from "../../../../domain/notifications/notification";
import TaskEnqueuer from "../../../../infra/queues/taskEnqueuer";
import EmailNotificationEnqueuerChainElement from "./notificationTypes/emailNotificationEnqueuerChainElement";

export default class NotificationEnqueuer {
    private readonly taskEnqueuer: TaskEnqueuer;

    constructor (taskEnqueuer: TaskEnqueuer) {
        this.taskEnqueuer = taskEnqueuer;
    }
    
    async enqueue(notification: Notification, notifiable: User) {
        if (!notification.isEnabled)
            return;

        const emailNotificationEnqueuer = new EmailNotificationEnqueuerChainElement(this.taskEnqueuer);

        await emailNotificationEnqueuer.enqueue(notification, notifiable);
    }
}