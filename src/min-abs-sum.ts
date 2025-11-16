/**
 * Min Abs Sum
 *
 * For a given array A of N integers and a sequence S of N integers from the set {−1, 1},
 * we define val(A, S) as follows:
 *
 * val(A, S) = |sum{ A[i]*S[i] for i = 0..N−1 }|
 *
 * (Assume that the sum of zero elements equals zero.)
 *
 * For a given array A, we are looking for such a sequence S that minimizes val(A,S).
 *
 * The function computes the minimum value of val(A,S) from all possible sequences S.
 *
 * @example
 * Example 1:
 * Input: A = [1, 5, 2, -2]
 * Output: 0
 * Explanation: With S = [−1, 1, −1, 1], val = 0
 *
 * @constraints
 * - N is an integer within the range [0..20,000]
 * - Each element of array A is an integer within the range [−100..100]
 *
 * @topics Array, Dynamic Programming
 * @difficulty Medium
 * @timeComplexity O(n * sum_range) - DP with sum range consideration
 * @spaceComplexity O(sum_range) - DP table for possible sums
 */

// AI'idea, pass 72%, fail performance tests
export function solution(A: number[]): number {
    if (A.length === 0) return 0;
    if (A.length === 1) return Math.abs(A[0]);

    const absoluteValues = A.map(value => Math.abs(value));
    const totalSum = absoluteValues.reduce((accumulator, value) => accumulator + value, 0);
    const targetSum = Math.floor(totalSum / 2);

    const canAchieveSum: boolean[] = new Array(targetSum + 1).fill(false);
    canAchieveSum[0] = true;

    for (const value of absoluteValues) {
        for (let currentSum = targetSum; currentSum >= value; currentSum--) {
            canAchieveSum[currentSum] = canAchieveSum[currentSum] || canAchieveSum[currentSum - value];
        }
    }

    for (let achievableSum = targetSum; achievableSum >= 0; achievableSum--) {
        if (canAchieveSum[achievableSum]) {
            return totalSum - 2 * achievableSum;
        }
    }

    return totalSum;
}
