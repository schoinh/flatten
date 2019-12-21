import flatten from './index';

test('returns flat array containing single integer as itself', () => {
  expect(flatten([1])).toEqual([1]);
});

test('returns flat array containing multiple integers as itself', () => {
  expect(flatten([1, 2, 3])).toEqual([1, 2, 3]);
});