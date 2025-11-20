/**
 * Countries Count
 *
 * A rectangular map consisting of N rows and M columns of square areas is given. Each area is painted with a certain color.
 *
 * Two areas on the map belong to the same country if the following conditions are met:
 * - they have the same color;
 * - it is possible to travel from one area to the other orthogonally (that is, by moving only north, south, west or east) without moving over areas of a different color.
 *
 * The map can be described by a zero-indexed matrix A consisting of N rows and M columns of integers. The color of each area is described by the corresponding element of the matrix. Two areas have the same color if and only if their corresponding matrix elements have the same value.
 *
 * @example
 * Example 1:
 * Input: A = [
 *   [5, 4, 4],
 *   [4, 3, 4],
 *   [3, 2, 4],
 *   [2, 2, 2],
 *   [3, 3, 4],
 *   [1, 4, 4],
 *   [4, 1, 1]
 * ]
 * Output: 11
 * Explanation: The matrix has 11 distinct countries based on connected components of the same color.
 *
 * @constraints
 * - N and M are integers within the range [1..300,000]
 * - the number of elements in matrix A is within the range [1..300,000]
 * - each element of matrix A is an integer within the range [−1,000,000,000..1,000,000,000]
 *
 * @topics Graph, DFS/BFS, Connected Components
 * @difficulty Hard
 * @timeComplexity O(N*M) - Visiting each cell once
 * @spaceComplexity O(N*M) - For visited matrix and recursion stack in worst case
 */

// 80% pass with 100% correctness and 50% performance
// https://app.codility.com/demo/results/trainingFHWAYK-9SF/
enum BlockStatus {
    NO_COUNTRY,
    DIFFERENT_COUNTRY,
    SAME_COUNTRY_NOT_REGISTERED,
    SAME_COUNTRY_REGISTERED,
}

interface AdjacentAndCurrentColors {
    currentBlockColor: number;
    northBlockColor: number;
    southBlockColor: number;
    westBlockColor: number;
    eastBlockColor: number;
}

interface AdjacentCountryCodes {
    northBlockColor: number;
    southBlockColor: number;
    westBlockColor: number;
    eastBlockColor: number;
}

interface AdjacentStatuses {
    northBlockStatus: BlockStatus;
    southBlockStatus: BlockStatus;
    westBlockStatus: BlockStatus;
    eastBlockStatus: BlockStatus;
}

function getBlockStatus(sourceBlockColorCode: number, desticationBlockColorCode: number, destinationBlockCountryCode: number): BlockStatus {
    if (desticationBlockColorCode === 0) return BlockStatus.NO_COUNTRY;
    if (desticationBlockColorCode === sourceBlockColorCode) {
        if (destinationBlockCountryCode === null) {
            return BlockStatus.SAME_COUNTRY_NOT_REGISTERED;
        } else if (destinationBlockCountryCode === 0) {
            return BlockStatus.NO_COUNTRY;
        } else {
            return BlockStatus.SAME_COUNTRY_REGISTERED;
        }
    } else {
        return BlockStatus.DIFFERENT_COUNTRY;
    }
}

function getColorCodeOfBlock(x: number, y: number, colorMap: number[][]): number {
    if (x < 0 || x >= colorMap.length) return 0;
    if (y < 0 || y >= colorMap[x].length) return 0;
    return colorMap[x][y];
}

function getCountryCodeOfBlock(x: number, y: number, countryMap: number[][]): number {
    if (x < 0 || x >= countryMap.length) return 0;
    if (y < 0 || y >= countryMap[x].length) return 0;
    return countryMap[x][y];
}

function getColorOfAdjacentBlocks(x: number, y: number, colorMap: number[][]): AdjacentAndCurrentColors {
    const currentBlockColor = getColorCodeOfBlock(x, y, colorMap);

    const northBlockColor = getColorCodeOfBlock(x - 1, y, colorMap);
    const southBlockColor = getColorCodeOfBlock(x + 1, y, colorMap);
    const westBlockColor = getColorCodeOfBlock(x, y - 1, colorMap);
    const eastBlockColor = getColorCodeOfBlock(x, y + 1, colorMap);

    return {
        currentBlockColor,
        northBlockColor,
        southBlockColor,
        westBlockColor,
        eastBlockColor,
    };
}

function getCountryCodeOfAdjacentBlocks(x: number, y: number, countryMap: number[][]): AdjacentCountryCodes {
    const northBlockCountryCode = getCountryCodeOfBlock(x - 1, y, countryMap);
    const southBlockCountryCode = getCountryCodeOfBlock(x + 1, y, countryMap);
    const westBlockCountryCode = getCountryCodeOfBlock(x, y - 1, countryMap);
    const eastBlockCountryCode = getCountryCodeOfBlock(x, y + 1, countryMap);

    return {
        northBlockColor: northBlockCountryCode,
        southBlockColor: southBlockCountryCode,
        westBlockColor: westBlockCountryCode,
        eastBlockColor: eastBlockCountryCode,
    };
}

function getBlockStatusOfAdjacentBlocks(x: number, y: number, colorMap: number[][], countryMap: number[][]): AdjacentStatuses {
    const { currentBlockColor, northBlockColor, southBlockColor, westBlockColor, eastBlockColor } = getColorOfAdjacentBlocks(x, y, colorMap);

    const {
        northBlockColor: northBlockCountryCode,
        southBlockColor: southBlockCountryCode,
        westBlockColor: westBlockCountryCode,
        eastBlockColor: eastBlockCountryCode,
    } = getCountryCodeOfAdjacentBlocks(x, y, countryMap);

    return {
        northBlockStatus: getBlockStatus(currentBlockColor, northBlockColor, northBlockCountryCode),
        southBlockStatus: getBlockStatus(currentBlockColor, southBlockColor, southBlockCountryCode),
        westBlockStatus: getBlockStatus(currentBlockColor, westBlockColor, westBlockCountryCode),
        eastBlockStatus: getBlockStatus(currentBlockColor, eastBlockColor, eastBlockCountryCode),
    };
}

function setCountryCodeOfBlock(x: number, y: number, colorMap: number[][], countryMap: number[][], desiredCountryCode: number): void {
    countryMap[x][y] = desiredCountryCode;
    const { northBlockStatus, southBlockStatus, westBlockStatus, eastBlockStatus } = getBlockStatusOfAdjacentBlocks(x, y, colorMap, countryMap);
    if (northBlockStatus === BlockStatus.SAME_COUNTRY_NOT_REGISTERED) {
        setCountryCodeOfBlock(x - 1, y, colorMap, countryMap, desiredCountryCode);
    }
    if (southBlockStatus === BlockStatus.SAME_COUNTRY_NOT_REGISTERED) {
        setCountryCodeOfBlock(x + 1, y, colorMap, countryMap, desiredCountryCode);
    }
    if (westBlockStatus === BlockStatus.SAME_COUNTRY_NOT_REGISTERED) {
        setCountryCodeOfBlock(x, y - 1, colorMap, countryMap, desiredCountryCode);
    }
    if (eastBlockStatus === BlockStatus.SAME_COUNTRY_NOT_REGISTERED) {
        setCountryCodeOfBlock(x, y + 1, colorMap, countryMap, desiredCountryCode);
    }
}

export function solution(A: number[][]): number {
    // Implement your solution here
    let numberOfCountries = 0;
    const countryMap: number[][] = Array(A.length)
        .fill(null)
        .map(() => Array(A[0].length).fill(null));

    for (let x = 0; x < A.length; x++) {
        for (let y = 0; y < A[x].length; y++) {
            const { northBlockStatus, southBlockStatus, westBlockStatus, eastBlockStatus } = getBlockStatusOfAdjacentBlocks(x, y, A, countryMap);

            if (northBlockStatus !== BlockStatus.SAME_COUNTRY_REGISTERED) {
                if (southBlockStatus !== BlockStatus.SAME_COUNTRY_REGISTERED) {
                    if (westBlockStatus !== BlockStatus.SAME_COUNTRY_REGISTERED) {
                        if (eastBlockStatus !== BlockStatus.SAME_COUNTRY_REGISTERED) {
                            numberOfCountries++;
                            setCountryCodeOfBlock(x, y, A, countryMap, numberOfCountries);
                        }
                    }
                }
            }
        }
    }

    return numberOfCountries;
}
