import trim from '../src/trim';

describe('test trim', (): void => {
  test('no space', (): void => {
    const resp: string = trim('testCase');
    expect(resp).toBe('testCase');
  });

  test('left space', (): void => {
    const resp: string = trim('     testCase');
    expect(resp).toBe('testCase');
  });

  test('right space', (): void => {
    const resp: string = trim('testCase     ');
    expect(resp).toBe('testCase');
  });

  test('both space', (): void => {
    const resp: string = trim('     testCase     ');
    expect(resp).toBe('testCase');
  });

});
