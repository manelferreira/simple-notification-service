import { User } from "../../../../../domain/notifiables/user";
import Notification from "../../../../../domain/notifications/notification";
import TaskEnqueuer from "../../../../../infra/queues/taskEnqueuer";
import EnqueuerChainElement from "../enqueuerChainElement";
import EmailNotificationTask from "./emailNotificationTask";

export default class EmailNotificationEnqueuerChainElement extends EnqueuerChainElement {
    private readonly taskEnqueuer : TaskEnqueuer;
    
    constructor(taskEnqueuer: TaskEnqueuer) {
        super()
        this.taskEnqueuer = taskEnqueuer;
    }

    mustEnqueue(notification: Notification) {
        return notification.mustBeSentViaEmail();
    }

    handle(notification: Notification, notifiable: User) {
        const emailNotification = notification.getEmailNotification();

        let task = new EmailNotificationTask(
            emailNotification.subject,
            emailNotification.body,
            notifiable.email.address
        );

        this.taskEnqueuer.enqueue(task);
    }
}