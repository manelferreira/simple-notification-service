import { ValueObject, ValueObjectProps } from "../valueObject";

export class Email extends ValueObject {
    public address : string;

    private constructor(address: string) {
        super();
        this.address = address;
    }

    public static create(address: string) {
        return new Email(address);
    }

    protected getAtomicValues(): ValueObjectProps {
        return {
            address: this.address
        };
    }
}