import odd_even from '../src/odd_even';

describe('test odd_even', (): void => {
  test('odd', (): void => {
    const resp: boolean = odd_even(1);
    expect(resp).toBe(false);
  });

  test('even', (): void => {
    const resp: boolean = odd_even(2);
    expect(resp).toBe(true);
  });
});
