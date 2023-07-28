import Task from "../../../../../infra/queues/task";

export default class EmailNotificationTask implements Task {
    name: string;
    parameters: { 
        emailSubject: string;
        emailBody: string;
        notifiableEmail: string;
    };

    constructor (emailSubject: string, emailBody: string, notifiableEmail: string) {
        this.name = "SendEmailNotification";
        this.parameters = {
            emailSubject: emailSubject,
            emailBody: emailBody,
            notifiableEmail: notifiableEmail
        }
    }
}