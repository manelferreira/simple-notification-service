
import { v4 as uuidv4 } from 'uuid';
import NotificationRepository from '../../../src/domain/notifications/notificationRepository';
import Notification from '../../../src/domain/notifications/notification';

export default class InMemoryNotificationRepository implements NotificationRepository {
    private notifications : Map<string, Notification>;

    constructor() {
        this.notifications = new Map<string, Notification>();
    }

    async create(notification: Notification): Promise<Notification> {
        const id = uuidv4();
        this.notifications.set(id, notification);
        return notification;
    }

    async findByName(name: string): Promise<Notification> {
        return [...this.notifications.values()].find(x => x.name == name );
    }
}