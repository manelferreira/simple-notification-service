import NotificationType from "../notificationType";

export default class EmailNotification implements NotificationType {
    subject: string;
    body: string;
    isEnabled: boolean;

    constructor (subject: string, body: string, isEnabled: boolean = true) {
        this.subject = subject;
        this.body = body;
        this.isEnabled = isEnabled;
    }

    public disable() {
        this.isEnabled = false;
    }
}