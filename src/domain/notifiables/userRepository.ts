import { User } from "./user";

export default interface UserRepository {
    create(user: User) : Promise<User>;
    findById(id: string) : Promise<User>;
    findByEmailAddress(emailAddress: string) : Promise<User>;
}