import { Email } from "./email";
import { Name } from "./name";

export class User {
    public name : Name;
    public email : Email;
    public readonly createdAt: Date;

    private constructor(name: Name, email: Email) {
        this.name = name;
        this.email = email;
        this.createdAt = new Date();
    }

    public static create(name: string, email: string) {
        const userName = Name.create(name);
        const userEmail = Email.create(email);

        return new User(userName, userEmail);
    }
}