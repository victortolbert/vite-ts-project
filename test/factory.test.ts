import axios from 'axios';
import * as example from '~/example';
import * as moduleA from '~/moduleA';

vi.mock('~/example', () => ({
  mocked: true,
}));

// doesnt think comments are mocks
// vi.mock('~/example', () => ({
//   mocked: false,
// }))

vi.mock('~/moduleA', async () => {
  const actual = await vi.importActual<any>('~/moduleA');
  return {
    B: 'B',
    ...actual,
  };
});

vi.mock('axios', () => {
  return {
    default: {
      get: vi.fn(),
    },
  };
});

describe('mocking with factory', () => {
  test.skip('successfuly mocked', () => {
    expect((example as any).mocked).toBe(true);
    expect(example.boolean).toBeUndefined();
  });

  test.skip('successfuly with actual', () => {
    expect(moduleA.A).toBe('A');
    expect((moduleA as any).B).toBe('B');
  });

  test.skip('mocks node_modules', () => {
    axios.get('./path');

    expect(axios.get).toHaveBeenCalledTimes(1);
  });
});
