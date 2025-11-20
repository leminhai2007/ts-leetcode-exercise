import { expect } from "chai";
import { solution } from "../../src/hard/countries-count";

interface TestCase {
    input: number[][];
    expected: number;
}

const testData: TestCase[] = [
    {
        input: [
            [5, 4, 4],
            [4, 3, 4],
            [3, 2, 4],
            [2, 2, 2],
            [3, 3, 4],
            [1, 4, 4],
            [4, 1, 1],
        ],
        expected: 11,
    },
    {
        input: [[1]],
        expected: 1,
    },
    {
        input: [
            [1, 1],
            [1, 1],
        ],
        expected: 1,
    },
    {
        input: [
            [1, 2],
            [2, 1],
        ],
        expected: 4,
    },
    {
        input: [
            [1, 1, 1],
            [1, 2, 1],
            [1, 1, 1],
        ],
        expected: 2,
    },
];

describe("Countries Count @hard @countries-count", function () {
    testData.forEach(({ input, expected }, _index) => {
        it(`should return ${expected} for the given matrix`, function () {
            const result = solution(input);
            expect(result).to.equal(expected);
        });
    });
});
