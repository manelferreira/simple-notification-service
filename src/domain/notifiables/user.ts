import { Email } from "./email";
import { Name } from "./name";

export class User {
    public readonly id: string;
    public name : Name;
    public email : Email;
    public readonly createdAt: Date;

    private constructor(name: Name, email: Email, createdAt: Date, id?: string) {
        if (id)
            this.id = id;

        this.name = name;
        this.email = email;
        this.createdAt = createdAt;
    }

    public static create(name: string, email: string) {
        const userName = Name.create(name);
        const userEmail = Email.create(email);

        return new User(userName, userEmail, new Date());
    }

    public static createComplete(id: string, name: string, email: string, createdAt: Date) {
        const userName = Name.create(name);
        const userEmail = Email.create(email);

        return new User(userName, userEmail, createdAt, id);
    }
}