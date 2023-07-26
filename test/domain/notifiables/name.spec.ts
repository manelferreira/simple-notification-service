import { Name } from "../../../src/domain/notifiables/name";

describe('Notifiable name value object', () => {
    test('creates a name', () => {
        const name = Name.create("Liu Kang");
        
        expect(name.fullname).toBe("Liu Kang")
    })
});