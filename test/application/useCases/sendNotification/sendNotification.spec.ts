import NotificationEnqueuer from "../../../../src/application/services/notifications/enqueuers/notificationEnqueuer";
import EmailNotificationTask from "../../../../src/application/services/notifications/enqueuers/notificationTypes/emailNotificationTask";
import SendNotificationRequest from "../../../../src/application/useCases/sendNotification/sendNotificationRequest";
import SendNotificationRequestHandler from "../../../../src/application/useCases/sendNotification/sendNotificationRequestHandler";
import { User } from "../../../../src/domain/notifiables/user";
import NotificationFactory from "../../../factories/notificationFactory"
import FakeTaskEnqueuer from "../../../mocks/queues/fakeTaskEnqueuer";
import InMemoryNotificationRepository from "../../../mocks/repositories/inMemoryNotificationRepository";
import InMemoryUserRepository from "../../../mocks/repositories/inMemoryUserRepository";

describe ('Send notification use case', () => {
    test('sends notification', async () => {
        let notification = NotificationFactory.createWithEmailType();
        const notificationRepository = new InMemoryNotificationRepository();
        notification = await notificationRepository.create(notification);

        let user = User.create("Johnny Cage", "jc@mk.com");
        const userRepository = new InMemoryUserRepository();
        user = await userRepository.create(user);

        const taskEnqueuer = new FakeTaskEnqueuer();
        const notificationEnqueuer = new NotificationEnqueuer(taskEnqueuer);

        const sut = new SendNotificationRequestHandler(userRepository, notificationRepository, notificationEnqueuer);

        const request = new SendNotificationRequest("some.email.notification", user.id);
        await sut.handle(request);

        expect(taskEnqueuer.size()).toBe(1);
        let task = taskEnqueuer.dequeueAs<EmailNotificationTask>();
        expect(task.type).toBe("EmailNotificationTask");
        expect(task.parameters.emailSubject).toBe("subject");
        expect(task.parameters.emailBody).toBe("body");
        expect(task.parameters.notifiableEmail).toBe("jc@mk.com");
    })
})