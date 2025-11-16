/**
 * Disappearing Pairs
 *
 * A string S containing only the letters "A", "B" and "C" is given. The string can be transformed
 * by removing one occurrence of "AA", "BB" or "CC". The process is repeated as long as at least
 * one rule can be applied. If more than one rule can be used, any one of them could be chosen.
 *
 * The function returns any string that can result from such a sequence of transformations.
 *
 * @example
 * Example 1:
 * Input: S = "ACCAABBC"
 * Output: "AC"
 * Explanation: One possible sequence removes pairs to get "AC".
 *
 * @example
 * Example 2:
 * Input: S = "ABCBBCBA"
 * Output: ""
 * Explanation: Can be reduced to empty string by removing pairs.
 *
 * @example
 * Example 3:
 * Input: S = "BABABA"
 * Output: "BABABA"
 * Explanation: No consecutive same letters, so remains unchanged.
 *
 * @constraints
 * - The length of string S is within the range [0..50,000]
 * - String S is made only of the characters 'A', 'B', and/or 'C'
 *
 * @topics String, Stack
 * @difficulty Easy
 * @timeComplexity O(n) - Single pass with stack
 * @spaceComplexity O(n) - Stack storage
 */

//// just have 83%, failed at performance tests
// export function solution(S: string): string {
//     if (S.length < 2) return S;

//     const aRule = /AA/g;
//     const bRule = /BB/g;
//     const cRule = /CC/g;
//     let charactersArray = JSON.parse(JSON.stringify(S));
//     let shouldContinue = true;
//     while (shouldContinue) {
//         let replacedStringWithARule = charactersArray.replace(aRule, '');
//         if (replacedStringWithARule === charactersArray) {
//             let replacedStringWithBRule = charactersArray.replace(bRule, '');
//             if (replacedStringWithBRule === charactersArray) {
//                 let replacedStringWithCRule = charactersArray.replace(cRule, '');
//                 if (replacedStringWithCRule === charactersArray) {
//                     shouldContinue = false;
//                 } else {
//                     charactersArray = replacedStringWithCRule;
//                 }
//             } else {
//                 charactersArray = replacedStringWithBRule;
//             }
//         } else {
//             charactersArray = replacedStringWithARule;
//         }
//     }
//     return charactersArray;
// }

// correct solution with stack

export function solution(S: string): string {
    if (S.length < 2) return S;
    const stack: string[] = [];
    for (const char of S) {
        if (stack.length > 0 && stack[stack.length - 1] === char) {
            stack.pop();
        } else {
            stack.push(char);
        }
    }
    return stack.join("");
}
