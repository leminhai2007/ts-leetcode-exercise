import { expect } from "chai";
import { solution } from "../../src/easy/tie-ropes";

interface TestCase {
    input: { K: number; A: number[] };
    expected: number;
}

const testData: TestCase[] = [
    { input: { K: 4, A: [1, 2, 3, 4, 1, 1, 3] }, expected: 3 },
    { input: { K: 1, A: [1] }, expected: 1 },
    { input: { K: 2, A: [1, 1] }, expected: 1 },
    { input: { K: 3, A: [1, 1] }, expected: 0 },
    { input: { K: 5, A: [1, 2, 3, 4] }, expected: 1 },
    { input: { K: 10, A: [1, 2, 3, 4, 5] }, expected: 1 },
    { input: { K: 1, A: [1, 1, 1] }, expected: 3 },
    { input: { K: 1000000000, A: [1000000000] }, expected: 1 },
    { input: { K: 1000000001, A: [1000000000] }, expected: 0 },
];

describe("Tie Ropes @easy @tie-ropes", function () {
    testData.forEach(({ input, expected }) => {
        it(`should return ${expected} for K=${input.K}, A=[${input.A.join(",")}]`, function () {
            const result = solution(input.K, input.A);
            expect(result).to.equal(expected);
        });
    });
});
