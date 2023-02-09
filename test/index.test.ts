import { assert, expect, test } from 'vitest';
import prettyMilliseconds from 'pretty-ms';
import { foo } from '~/index';

prettyMilliseconds(1337);

// Edit an assertion and save to see HMR in action
test('Math.sqrt()', () => {
  expect(Math.sqrt(4)).toBe(2);
  expect(Math.sqrt(144)).toBe(12);
  expect(Math.sqrt(2)).toBe(Math.SQRT2);
});

test('JSON', () => {
  const input = {
    foo: 'hello',
    bar: 'world',
  };
  const output = JSON.stringify(input);

  expect(output).eq('{"foo":"hello","bar":"world"}');
  assert.deepEqual(JSON.parse(output), input, 'matches original');
});

test('simple', () => {
  assert.equal(foo, 'foo');
});
