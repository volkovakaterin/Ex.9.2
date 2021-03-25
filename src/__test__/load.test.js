/* eslint-disable linebreak-style */
import ArrayBufferConverter from '../arrayBufferConverter'; 
import getBuffer from '../getBuffer';

test('load', () => {
  function test() {
    const buffer = getBuffer();
    const array = new ArrayBufferConverter();
    array.load(buffer);
    array.toString();
  }
  const expected = { data: { user: { id: 1, name: 'Hitman', level: 10 } } };
  expect(test()).toBe(expected);
});
