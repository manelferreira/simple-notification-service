import { ValueObject, ValueObjectProps } from "../../../src/domain/valueObject";


export class DummyValueObject extends ValueObject {
    private readonly someProperty: string;

    constructor(value: string) {
        super()
        this.someProperty = value;
    }

    protected getAtomicValues(): ValueObjectProps {
        return { 
            someProperty: this.someProperty 
        }
    }
}