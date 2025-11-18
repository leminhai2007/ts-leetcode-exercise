import { expect } from "chai";
import { solution } from "../../src/hard/min-abs-sum";

interface TestCase {
    input: number[];
    expected: number;
}

const testData: TestCase[] = [
    { input: [], expected: 0 },
    { input: [1, 5, 2, -2], expected: 0 },
    { input: [1], expected: 1 },
    { input: [2], expected: 2 },
    { input: [1, 2], expected: 1 },
    { input: [3, 3], expected: 0 },
    { input: [1, 1, 1], expected: 1 },
    { input: [1, 2, 3], expected: 0 },
    { input: [3, 3, 3, 4, 5], expected: 0 },
];

describe("Min Abs Sum @hard @min-abs-sum", function () {
    testData.forEach(({ input, expected }) => {
        it(`should return ${expected} for A=${JSON.stringify(input)}`, function () {
            expect(solution(input)).to.equal(expected);
        });
    });
});
