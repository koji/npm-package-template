# npm-package-template

This is a template for a npm package.
Current `src` has trim and isOdd/isEven functionality.

## Stack

- TypeScript 7
- tsdown (build, ESM + CJS + .d.ts)
- Vitest (test)
- oxlint + oxfmt
- Node >= 22.12 (CI: Bun via GitHub Actions)

## How to run locally

```zsh
$ bun install

# lint
$ bun run lint

# format (write)
$ bun run format

# format check
$ bun run format:check

# typecheck
$ bun run typecheck

# build
$ bun run build

# test
$ bun run test
```

## CI

GitHub Actions (`.github/workflows/ci.yml`) runs on Bun.
CI runs `bun install` with `bun.lock`, then lint, format check, typecheck, build, and test.
