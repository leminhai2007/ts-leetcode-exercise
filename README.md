# TypeScript LeetCode Exercises

This project is set up for practicing LeetCode problems in TypeScript with Mocha for testing.

## Setup

1. Install dependencies: `yarn install`

## Writing Solutions

For each LeetCode problem, create a `.ts` file in `src/` with:

1. **Comprehensive JSDoc documentation** including:
    - Problem title and description
    - Examples with input/output
    - Constraints
    - Time/Space complexity
    - Difficulty and topics

2. **Clean, well-commented implementation**

Example structure:

```typescript
/**
 * Problem Title - LeetCode Problem
 *
 * Problem description...
 *
 * @example
 * Examples...
 *
 * @constraints
 * - constraint 1
 * - constraint 2
 *
 * @topics Topic1, Topic2
 * @difficulty Easy/Medium/Hard
 */
function solution(...) {
    // implementation
}
```

## Writing Tests

Use @ tags in describe blocks to categorize tests:

- `@easy`, `@medium`, `@hard` for difficulty levels
- `@problem-name` for specific problems

Example:

```typescript
describe("Two Sum @easy @two-sum", function () {
    // test cases
});
```

## Running Tests

- Run all tests: `yarn test`
- Run by difficulty: `yarn test:easy`, `yarn test:medium`, `yarn test:hard`
- Run by problem: `yarn test:tag "@two-sum"`
- Run by custom tags: `yarn test:tag "@your-tag"`
