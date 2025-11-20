/**
 * Sparse Binary Decomposition
 *
 * A non-negative integer N is called sparse if its binary representation does not contain two consecutive bits set to 1.
 * For example, 41 is sparse, because its binary representation is "101001" and it does not contain two consecutive 1s.
 * On the other hand, 26 is not sparse, because its binary representation is "11010" and it contains two consecutive 1s.
 *
 * Two non-negative integers P and Q are called a sparse decomposition of integer N if P and Q are sparse and N = P + Q.
 *
 * Write a function that, given a non-negative integer N, returns any integer that is one part of a sparse decomposition of N.
 * The function should return −1 if there is no sparse decomposition of N.
 *
 * @example
 * Example 1:
 * Input: N = 26
 * Output: 18
 * Explanation: 18 and 8 are a sparse decomposition of 26 (18 is "10010", 8 is "1000")
 *
 * @example
 * Example 2:
 * Input: N = 7
 * Output: 5
 * Explanation: 5 and 2 are a sparse decomposition of 7 (5 is "101", 2 is "10")
 *
 * @example
 * Example 3:
 * Input: N = 15
 * Output: 5
 * Explanation: 5 and 10 are a sparse decomposition of 15 (5 is "101", 10 is "1010")
 *
 * @constraints
 * - N is an integer within the range [0..1,000,000,000]
 *
 * @topics Bit Manipulation
 * @difficulty Hard
 * @timeComplexity O(log N) - Iterates through bits of N
 * @spaceComplexity O(1) - Constant space
 */

// 100% correct solution
// https://app.codility.com/demo/results/trainingKJWEGC-J44/
export function solution(N: number): number {
    if (N === 0) return 0;

    const bitOfNumber = N.toString(2)
        .split("")
        .map(bit => parseInt(bit, 10));

    const sparsePart1: number[] = [];
    const sparsePart2: number[] = [];
    let saveValueToPart1Toggle = true;
    bitOfNumber.forEach(bit => {
        if (bit === 1) {
            if (saveValueToPart1Toggle) {
                sparsePart1.push(1);
                sparsePart2.push(0);
            } else {
                sparsePart1.push(0);
                sparsePart2.push(1);
            }
            saveValueToPart1Toggle = !saveValueToPart1Toggle;
        } else {
            sparsePart1.push(0);
            sparsePart2.push(0);
            saveValueToPart1Toggle = true;
        }
    });

    const resultPart1 = parseInt(sparsePart1.join(""), 2);

    return resultPart1;
}
