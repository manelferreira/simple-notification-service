import { User } from "../../../src/domain/notifiables/user";

describe('User entity', () => {
    test('creates a user', () => {
        let user = User.create("Liu Kang", "liukang@mk.com");
        
        expect(user.name.fullname).toBe("Liu Kang")
        expect(user.email.address).toBe("liukang@mk.com");
    })
});