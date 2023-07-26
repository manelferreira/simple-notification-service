import { shallowEqual } from "shallow-equal-object";

export interface ValueObjectProps {
    [index: string]: any;
}

export abstract class ValueObject {
    public equals (vo? : ValueObject) : boolean {
        if (vo == null || vo == undefined) {
            return false;
        }
        if (vo.getAtomicValues() == undefined) {
            return false;
        }
        return shallowEqual(this.getAtomicValues(), vo.getAtomicValues());
    }

    protected abstract getAtomicValues() : ValueObjectProps;
}