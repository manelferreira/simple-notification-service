import EmailNotification from "./types/email/emailNotification";
import NotificationType from "./types/notificationType";

export default class Notification {
    name : string;
    isEnabled: boolean;
    private types: NotificationType[];

    get typesCount() {
        return this.types.length;
    }   

    private constructor(name: string, isEnabled: boolean, types: NotificationType[]) {
        this.name = name;
        this.isEnabled = isEnabled;
        this.types = types;
    }

    public static create(name: string) {
        return new Notification(name, true, []);
    }

    public addEmailNotification(subject: string, body: string) {
        let emailNotification = new EmailNotification(subject, body);
        this.types.push(emailNotification);
    }
}