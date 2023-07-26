import NotificationRepository from "../../../domain/notifications/notificationRepository";
import RequestHandler from "../../helpers/useCases/requestHandler";
import CreateNotificationRequest from "./createNotificationRequest";
import CreateNotificationResponse from "./createNotificationResponse";
import Notification from "../../../domain/notifications/notification";

export default class CreateNotificationRequestHandler implements RequestHandler<CreateNotificationRequest, CreateNotificationResponse> {
    private readonly notificationRepository : NotificationRepository;

    constructor(notificationRepository: NotificationRepository) {
        this.notificationRepository = notificationRepository;
    }
    
    async handle(request: CreateNotificationRequest): Promise<CreateNotificationResponse> {
        let notification = Notification.create(request.name);

        notification = await this.notificationRepository.create(notification);

        return new CreateNotificationResponse();
    }
}