export default class SendNotificationRequest {
    readonly notificationName: string;
    readonly notifiableId: string;

    constructor (notificationName: string, notifiableId: string) {
        this.notificationName = notificationName;
        this.notifiableId = notifiableId;
    }
}