import { DummyValueObject } from "./dummyValueObject";

describe('Value object base class', () => {
    test("returns true when two instances have the same properties' values", () => {
        let dummy1 = new DummyValueObject("value 1");
        let dummy2 = new DummyValueObject("value 1");

        expect(dummy1.equals(dummy2)).toBe(true);
    })

    test('returns false when two instances have different property values', () => {
        let dummy1 = new DummyValueObject("value 1");
        let dummy2 = new DummyValueObject("value 2");

        expect(dummy1.equals(dummy2)).toBe(false);
    })
});