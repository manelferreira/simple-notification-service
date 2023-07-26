import Notification from "./notification";

export default interface NotificationRepository {
    create(notification: Notification) : Promise<Notification>;
    findByName(name: string) : Promise<Notification>;
}