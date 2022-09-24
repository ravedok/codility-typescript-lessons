
const MIN_RANGE_VALUE = 1;
const MAX_RANGE_VALUE = 2147483647;

const numberToBinary = (num: number): string => num.toString(2);

const isInValidRange = (num: number): boolean => num >= MIN_RANGE_VALUE || num <= MAX_RANGE_VALUE;

const positionsOfOnes = (value: string, index: number ): number => value === '1' ? index : -1
const discardNegativesPosition = (value: number): boolean => value >= 0;
const calculateGap = (value: number, index: number, array: number[]): number => {
    const next = array[index + 1];
    return next - (value + 1);
};

const discardNaN = (value:number) => !Number.isNaN(value);

export const binaryGap = (num: number): number => {

    if (!Number.isInteger(num)) {
        return 0;
    }

    if (!isInValidRange(num)) {
        return 0;
    }

    const gaps = 
        numberToBinary(num)
        .split('')
        .map(positionsOfOnes)
        .filter(discardNegativesPosition)
        .map(calculateGap)
        .filter(discardNaN);

    if (gaps.length === 0 ){
        return 0;
    }

    return Math.max(...gaps);
}