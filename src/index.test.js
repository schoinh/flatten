import flatten from './index';

test('returns flat array containing single integer as itself', () => {
  expect(flatten([1])).toEqual([1]);
});

test('returns flat array containing multiple integers as itself', () => {
  expect(flatten([1, 2, 3])).toEqual([1, 2, 3]);
});

test('removes single nested empty array', () => {
  expect(flatten([1, 2, [], 3])).toEqual([1, 2, 3]);
});

test('flattens single nested array with one integer inside', () => {
  expect(flatten([1, 2, [3], 4])).toEqual([1, 2, 3, 4]);
});

test('flattens single nested array with multiple integers inside', () => {
  expect(flatten([1, 2, [3, 4, 5], 6])).toEqual([1, 2, 3, 4, 5, 6]);
});

test('flattens doubly nested array', () => {
  expect(flatten([1, 2, [3, [4], 5], 6])).toEqual([1, 2, 3, 4, 5, 6]);
});

test('flattens triply nested array', () => {
  expect(flatten([1, 2, [3, [[], 4], 5], 6])).toEqual([1, 2, 3, 4, 5, 6]);
});

test('flattens triply nested array', () => {
  expect(flatten([[1], 2, [[3, 4], 5], [[[]]], [[[6]]], 7, 8, []])).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
});

test('returns empty array as itself', () => {
  expect(flatten([])).toEqual([]);
});