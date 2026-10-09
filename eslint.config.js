// NOTE: typescript-eslint is intentionally omitted for now — it hard-errors
// on TypeScript 7 ("typescript-eslint does not support TS 7.0") and its peer
// range (typescript >=4.8.4 <6.1.0) excludes TS 7 entirely.
// Re-add it once upstream supports TS 7:
// https://github.com/typescript-eslint/typescript-eslint/issues/10940
// Until then, `npm run typecheck` (tsc --noEmit) covers type correctness.
export default [
  {
    ignores: ['dist/', 'node_modules/', 'coverage/'],
  },
];
