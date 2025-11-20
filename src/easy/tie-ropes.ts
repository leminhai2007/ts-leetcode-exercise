/**
 * Tie Ropes
 *
 * There are N ropes numbered from 0 to N − 1, whose lengths are given in an array A, lying on the floor in a line. For each I (0 ≤ I < N), the length of rope I on the line is A[I].
 *
 * We say that two ropes I and I + 1 are adjacent. Two adjacent ropes can be tied together with a knot, and the length of the tied rope is the sum of lengths of both ropes. The resulting new rope can then be tied again.
 *
 * For a given integer K, the goal is to tie the ropes in such a way that the number of ropes whose length is greater than or equal to K is maximal.
 *
 * @example
 * Example 1:
 * Input: K = 4, A = [1, 2, 3, 4, 1, 1, 3]
 * Output: 3
 * Explanation: Tie ropes 1-2 (length 5), ropes 4-5-6 (length 5), and rope 3 (length 4) remain, giving 3 ropes >= 4.
 *
 * @constraints
 * - N is an integer within the range [1..100,000]
 * - K is an integer within the range [1..1,000,000,000]
 * - each element of array A is an integer within the range [1..1,000,000,000]
 *
 * @topics Greedy
 * @difficulty Easy
 * @timeComplexity O(n) - Single pass through the array
 * @spaceComplexity O(1) - Constant space
 */

// 100% pass
// https://app.codility.com/demo/results/trainingE2QTJ3-YCN/
export function solution(K: number, A: number[]): number {
    let count = 0;
    let currentSum = 0;

    for (const length of A) {
        currentSum += length;
        if (currentSum >= K) {
            count++;
            currentSum = 0;
        }
    }

    return count;
}
