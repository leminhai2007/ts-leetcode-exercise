import { expect } from "chai";
import { solution } from "../../src/easy/binary-gap";

interface TestCase {
    input: number;
    expected: number;
}

const testData: TestCase[] = [
    { input: 9, expected: 2 },
    { input: 529, expected: 4 },
    { input: 20, expected: 1 },
    { input: 15, expected: 0 },
    { input: 32, expected: 0 },
    { input: 1041, expected: 5 },
    { input: 1, expected: 0 },
    { input: 2, expected: 0 },
    { input: 3, expected: 0 },
    { input: 4, expected: 0 },
    { input: 5, expected: 1 },
    { input: 6, expected: 0 },
    { input: 7, expected: 0 },
    { input: 8, expected: 0 },
    { input: 16, expected: 0 },
    { input: 17, expected: 3 },
    { input: 2147483647, expected: 0 }, // Max value, all 1s
    { input: 1610612737, expected: 28 },
    { input: 1073741825, expected: 29 },
    { input: 1376796946, expected: 5 },
    { input: 805306373, expected: 25 },
    { input: 74901729, expected: 4 },
    { input: 66561, expected: 9 },
];

describe("Binary Gap @easy @binary-gap", function () {
    testData.forEach(({ input, expected }) => {
        it(`should return ${expected} for N=${input}`, function () {
            expect(solution(input)).to.equal(expected);
        });
    });
});
