import { expect } from "chai";
import { solution } from "../../src/hard/sparse-binary-decomposition";

interface TestCase {
    input: number;
    expected: number[];
}

const testData: TestCase[] = [
    { input: 26, expected: [5, 10, 8, 18, 9, 17, 16, 21] },
    { input: 1023, expected: [682] },
    { input: 536870911, expected: [357913941] },
    { input: 74901729, expected: [72657057] },
    { input: 1000000000, expected: [714246656] },
];

describe("Sparse Binary Decomposition @hard @sparse-binary", function () {
    testData.forEach(({ input, expected }) => {
        it(`should return one of ${expected} for N=${input}`, function () {
            expect(solution(input)).to.be.oneOf(expected);
        });
    });
});
