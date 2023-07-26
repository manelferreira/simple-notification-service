import { Email } from "../../../src/domain/notifiables/email";

describe('Notifiable email value object', () => {
    test('creates an email', () => {
        const email = Email.create("liukang@mk.com.br");
        
        expect(email.address).toBe("liukang@mk.com.br")
    })
});