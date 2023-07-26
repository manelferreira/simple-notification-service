import CreateNotificationRequest from "../../../../src/application/useCases/createNotification/createNotificationRequest";
import CreateNotificationRequestHandler from "../../../../src/application/useCases/createNotification/createNotificationRequestHandler";
import InMemoryNotificationRepository from "../../mocks/repositories/inMemoryNotificationRepository"

describe('create notification use case', () => {
    test('creates a notification', async () => {
        const notificationRepository = new InMemoryNotificationRepository();
        const sut = new CreateNotificationRequestHandler(notificationRepository);
        const request = new CreateNotificationRequest("simple.notification");

        await sut.handle(request);

        var createdNotification = await notificationRepository.findByName("simple.notification");
        expect(createdNotification.name).toBe("simple.notification");
        expect(createdNotification.isEnabled).toBe(true);
        expect(createdNotification.types.length).toBe(0);
    });
})