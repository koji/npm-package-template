# npm-package-template
This is a template for a npm package.
Current `src` has trim and isOdd/isEven functionality.

## Stack
- TypeScript 7
- tsdown (build, ESM + CJS + .d.ts)
- Vitest (test)
- ESLint flat config + typescript-eslint
- Node >= 22.12 (CI: `cimg/node:24.x`)

## How to run locally

```zsh
$ npm install

# lint
$ npm run lint

# typecheck
$ npm run typecheck

# build
$ npm run build

# test
$ npm test
```

## Circle CI
image: `cimg/node:24.x`
Circle CI is using `npm`, so `package-lock.json` is committed (no `yarn.lock`).
