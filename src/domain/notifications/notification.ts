import NotificationType from "./types/notificationType";

export default class Notification {
    name : string;
    isEnabled: boolean;
    types: NotificationType[];

    private constructor(name: string, isEnabled: boolean, types: NotificationType[]) {
        this.name = name;
        this.isEnabled = isEnabled;
        this.types = types;
    }

    public static create(name: string) {
        return new Notification(name, true, []);
    }
}