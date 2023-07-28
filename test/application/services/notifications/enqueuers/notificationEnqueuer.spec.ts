import NotificationEnqueuer from "../../../../../src/application/services/notifications/enqueuers/notificationEnqueuer";
import EmailNotificationTask from "../../../../../src/application/services/notifications/enqueuers/notificationTypes/emailNotificationTask";
import { User } from "../../../../../src/domain/notifiables/user";
import NotificationFactory from "../../../../factories/notificationFactory";
import FakeTaskEnqueuer from "../../../../mocks/queues/fakeTaskEnqueuer";

describe ('Notification Enqueuer application service', () => {
    test ('does not enqueue notifications when whole notification is disabled', async () => {
        const notification = NotificationFactory.createWithEmailType();
        notification.disable();
        const user = User.create("Raiden", "raiden@mk.com");
        const fakeTaskEnqueuer = new FakeTaskEnqueuer();

        const sut = new NotificationEnqueuer(fakeTaskEnqueuer);

        await sut.enqueue(notification, user);

        expect(fakeTaskEnqueuer.size()).toBe(0);
    });

    test('enqueues email notification', async () => {
        const notification = NotificationFactory.createWithEmailType();
        const user = User.create("Raiden", "raiden@mk.com");
        const fakeTaskEnqueuer = new FakeTaskEnqueuer();

        const sut = new NotificationEnqueuer(fakeTaskEnqueuer);

        await sut.enqueue(notification, user);

        expect(fakeTaskEnqueuer.size()).toBe(1);
        
        let task = fakeTaskEnqueuer.dequeueAs<EmailNotificationTask>();
        expect(task.type).toBe("EmailNotificationTask");
        expect(task.parameters.emailSubject).toBe("subject");
        expect(task.parameters.emailBody).toBe("body");
        expect(task.parameters.notifiableEmail).toBe("raiden@mk.com");
    });

    test('does not enqueue email notification when type is disabled', async () => {
        const notification = NotificationFactory.createWithEmailType();
        notification.disableEmail();
        const user = User.create("Raiden", "raiden@mk.com");
        const fakeTaskEnqueuer = new FakeTaskEnqueuer();

        const sut = new NotificationEnqueuer(fakeTaskEnqueuer);

        await sut.enqueue(notification, user);

        expect(fakeTaskEnqueuer.size()).toBe(0);
    });
});