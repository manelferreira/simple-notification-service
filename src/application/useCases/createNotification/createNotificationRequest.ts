export default class CreateNotificationRequest {
    readonly name: string;
    email?: { subject: string, body: string }

    constructor (name: string) {
        this.name = name;
    }

    public addEmail(subject: string, body: string) {
        this.email = { subject: subject, body: body };
    }

    public hasEmailData() {
        return this.email ? true : false;
    }
}