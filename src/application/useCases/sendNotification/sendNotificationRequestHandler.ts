import UserRepository from "../../../domain/notifiables/userRepository";
import NotificationRepository from "../../../domain/notifications/notificationRepository";
import RequestHandler from "../../helpers/useCases/requestHandler";
import NotificationEnqueuer from "../../services/notifications/enqueuers/notificationEnqueuer";
import SendNotificationRequest from "./sendNotificationRequest";
import SendNotificationResponse from "./sendNotificationResponse";

export default class SendNotificationRequestHandler implements RequestHandler<SendNotificationRequest, SendNotificationResponse> {
    private readonly userRepository : UserRepository;
    private readonly notificationRepository : NotificationRepository;
    private readonly notificationEnqueuer: NotificationEnqueuer;

    constructor(
        userRepository: UserRepository, 
        notificationRepository: NotificationRepository,
        notificationEnqueuer: NotificationEnqueuer) {
        this.userRepository = userRepository;
        this.notificationRepository = notificationRepository;
        this.notificationEnqueuer = notificationEnqueuer;
    }
    
    async handle(request: SendNotificationRequest): Promise<SendNotificationResponse> {
        const user = await this.userRepository.findById(request.notifiableId);

        const notification = await this.notificationRepository.findByName(request.notificationName);

        this.notificationEnqueuer.enqueue(notification, user);

        return new SendNotificationResponse();
    }
}