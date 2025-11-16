import { expect } from "chai";
import { solution } from "../src/disappearing-pairs";

interface TestCase {
    input: string;
    expected: string;
}

const testData: TestCase[] = [
    { input: "ACCAABBC", expected: "AC" },
    { input: "ABCBBCBA", expected: "" },
    { input: "BABABA", expected: "BABABA" },
    { input: "", expected: "" },
    { input: "A", expected: "A" },
    { input: "AA", expected: "" },
    { input: "AB", expected: "AB" },
    { input: "AAB", expected: "B" },
    { input: "AABB", expected: "" },
    { input: "AAA", expected: "A" },
    { input: "ABCCBA", expected: "" },
];

describe("Disappearing Pairs @hard @disappearing-pairs", function () {
    testData.forEach(({ input, expected }) => {
        it(`should return "${expected}" for S="${input}"`, function () {
            expect(solution(input)).to.equal(expected);
        });
    });
});
