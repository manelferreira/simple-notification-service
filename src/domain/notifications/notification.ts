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

    public disable() {
        this.isEnabled = false;
    }

    public addEmailNotification(subject: string, body: string) {
        if (this.hasEmailType())
            throw new Error("Email type is already set");

        let emailNotification = new EmailNotification(subject, body);
        this.types.push(emailNotification);
    }

    public mustBeSentViaEmail() {
        if (!this.isEnabled)
            return false;

        const emailNotification = this.getEmailNotification();  

        if (!emailNotification)
            return false;
        
        return emailNotification.isEnabled;
    }

    public hasEmailType() {
        const emailNotification = this.getEmailNotification();  
        return emailNotification ? true : false;
    }

    public getEmailNotification() : EmailNotification {
        return this.types.find(x => x instanceof EmailNotification) as EmailNotification;
    }

    public disableEmail() {
        if (!this.hasEmailType())
            return;

        const emailNotification = this.getEmailNotification();
        emailNotification.disable();
    }
}