import { User } from "../../../../domain/notifiables/user";
import Notification from "../../../../domain/notifications/notification";

export default abstract class EnqueuerChainElement {
    private nextEnqueuer : EnqueuerChainElement;

    public chainNext(next: EnqueuerChainElement) {
        this.nextEnqueuer = next;
    }

    public async enqueue(notification: Notification, notifiable: User) : Promise<void> {
        if (this.mustEnqueue(notification))
            await this.handle(notification, notifiable);
        
        if (this.nextEnqueuer)
            await this.nextEnqueuer.enqueue(notification, notifiable);
    }

    abstract handle(notification: Notification, notifiable: User);

    abstract mustEnqueue(notification: Notification);
}