import { User } from "./user";

export default interface UserRepository {
    create(user: User) : Promise<User>;
    findByEmailAddress(emailAddress: string) : Promise<User>;
}