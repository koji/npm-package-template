# npm-package-template

This is a template for a npm package.
Current `src` has trim and isOdd/isEven functionality.

## Stack

- TypeScript 7
- tsdown (build, ESM + CJS + .d.ts)
- Vitest (test)
- oxlint + oxfmt
- Node >= 22.12 (CI: Node 24 via GitHub Actions)

## How to run locally

```zsh
$ npm install

# lint
$ npm run lint

# format (write)
$ npm run format

# format check
$ npm run format:check

# typecheck
$ npm run typecheck

# build
$ npm run build

# test
$ npm test
```

## CI

GitHub Actions (`.github/workflows/ci.yml`) on Node 24.
CI runs `npm ci` with `package-lock.json`, then lint, format check, typecheck, build, and test.
