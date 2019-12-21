import flatten from './index';

test('returns empty array as empty array', () => {
  expect(flatten([])).toEqual([]);
});