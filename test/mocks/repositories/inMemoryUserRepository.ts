
import { v4 as uuidv4 } from 'uuid';
import UserRepository from '../../../src/domain/notifiables/userRepository';
import { User } from '../../../src/domain/notifiables/user';

export default class InMemoryUserRepository implements UserRepository {
    private users : Map<string, User>;

    constructor() {
        this.users = new Map<string, User>();
    }

    async create(user: User): Promise<User> {
        const id = uuidv4();
        this.users.set(id, user);
        return User.createComplete(id, user.name.fullname, user.email.address, user.createdAt);
    }

    async findById(id: string): Promise<User> {
        return this.users.get(id);
    }

    async findByEmailAddress(emailAddress: string): Promise<User> {
        return [...this.users.values()].find(x => x.email.address == emailAddress);
    }
}