# TypeScript LeetCode Exercises

This project is set up for practicing LeetCode problems in TypeScript with Mocha for testing.

## Code Quality & Formatting

This project uses **ESLint + Prettier** for code quality and consistent formatting:

### ESLint (Linting + Code Quality)

- Catches potential bugs and enforces coding standards
- TypeScript-specific rules
- Integrates with Prettier to avoid conflicts

### Prettier (Code Formatting)

- Consistent code formatting
- Opinionated formatting rules
- Auto-fixes formatting issues

### Commands

- `yarn lint` - Check for linting issues
- `yarn lint:fix` - Auto-fix linting and formatting issues
- `yarn format` - Format code with Prettier

### Git Hooks (Husky)

- **Pre-commit hook**: Automatically runs `yarn lint:fix` and `yarn format` before each commit
- Ensures code quality and consistent formatting
- Prevents commits with linting errors or formatting issues

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
 * Problem Title
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
