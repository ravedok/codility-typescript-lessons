import { binaryGap } from "./binary-gap";

describe('BinaryGap', () => {
    test('if we introduce 9 return 2 binary gap length', () => {
        const result = binaryGap(9);
        const expected = 2;

        expect(result).toBe(expected);
    });

    test('if we introduce 529 return 4 binary gap length', () => {
        const result = binaryGap(529);
        const expected = 4;

        expect(result).toBe(expected);
    });

    test('if we introduce 15 return 0 binary gap length', () => {
        const result = binaryGap(2);
        const expected = 0;

        expect(result).toBe(expected);
    });

    test('if we introduce 20 return 1 binary gap length', () => {
        const result = binaryGap(20);
        const expected = 1;

        expect(result).toBe(expected);
    });

    test('if we introduce 32 return 0 binary gap length', () => {
        const result = binaryGap(32);
        const expected = 0;

        expect(result).toBe(expected);
    });

    test('if we introduce decimal value return undefined', () => {
        const result = binaryGap(3.2);
        const expected = 0;

        expect(result).toBe(expected);
    });
});