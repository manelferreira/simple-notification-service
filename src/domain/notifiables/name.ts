import { ValueObject, ValueObjectProps } from "../valueObject";

export class Name extends ValueObject {
    public fullname : string;

    private constructor(name: string) {
        super();
        this.fullname = name;
    }

    public static create(name: string) {
        return new Name(name);
    }

    protected getAtomicValues(): ValueObjectProps {
        return {
            fullname: this.fullname
        };
    }
}