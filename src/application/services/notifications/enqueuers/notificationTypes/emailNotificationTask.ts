import Task from "../../../../../infra/queues/task";

export default class EmailNotificationTask implements Task {
    type: string;
    parameters: { 
        emailSubject: string;
        emailBody: string;
        notifiableEmail: string;
    };

    constructor (emailSubject: string, emailBody: string, notifiableEmail: string) {
        this.type = "EmailNotificationTask";
        this.parameters = {
            emailSubject: emailSubject,
            emailBody: emailBody,
            notifiableEmail: notifiableEmail
        }
    }
}