import { expect } from "chai";
import { solution } from "../src/two-sum";

interface TestCase {
    input: {
        nums: number[];
        target: number;
    };
    expected: number[];
}

const testData: TestCase[] = [
    { input: { nums: [2, 7, 11, 15], target: 9 }, expected: [0, 1] },
    { input: { nums: [3, 2, 4], target: 6 }, expected: [1, 2] },
    { input: { nums: [3, 3], target: 6 }, expected: [0, 1] },
];

describe("Two Sum @easy @two-sum", function () {
    testData.forEach(({ input, expected }) => {
        it(`should return ${JSON.stringify(expected)} for nums=${JSON.stringify(input.nums)}, target=${input.target}`, function () {
            expect(solution(input.nums, input.target)).to.deep.equal(expected);
        });
    });
});
