/**
 * Binary Gap
 *
 * A binary gap within a positive integer N is any maximal sequence of consecutive zeros
 * that is surrounded by ones at both ends in the binary representation of N.
 *
 * For example, number 9 has binary representation 1001 and contains a binary gap of length 2.
 * The number 529 has binary representation 1000010001 and contains two binary gaps: one of
 * length 4 and one of length 3. The number 20 has binary representation 10100 and contains
 * one binary gap of length 1. The number 15 has binary representation 1111 and has no binary gaps.
 *
 * The function returns the length of its longest binary gap. Returns 0 if N doesn't contain a binary gap.
 *
 * @example
 * Example 1:
 * Input: N = 1041
 * Output: 5
 * Explanation: 1041 has binary representation 10000010001, longest gap is 5
 *
 * @example
 * Example 2:
 * Input: N = 32
 * Output: 0
 * Explanation: 32 has binary representation 100000, no gaps
 *
 * @example
 * Example 3:
 * Input: N = 9
 * Output: 2
 * Explanation: 9 has binary representation 1001, gap of 2
 *
 * @constraints
 * - N is an integer within the range [1..2,147,483,647]
 *
 * @topics Bit Manipulation
 * @difficulty Easy
 * @timeComplexity O(log N) - Binary representation length
 * @spaceComplexity O(1) - Constant space
 */

// 100%, no performance assessment
export function solution(N: number): number {
    const regexpRule = /(?<=1)(0+)(?=1)/g;

    const binaryString = N.toString(2);
    const matches = binaryString.match(regexpRule);
    if (!matches) {
        return 0;
    }
    let maxLength = 0;
    for (const match of matches) {
        if (match.length > maxLength) {
            maxLength = match.length;
        }
    }
    return maxLength;
}
