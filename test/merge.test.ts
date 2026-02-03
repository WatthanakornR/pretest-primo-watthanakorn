import { merge } from '../src/merge';

describe('merge function', () => {
    test('should merge three sorted arrays correctly', () => {
        const col1 = [1, 3, 5];
        const col2 = [2, 4, 6];
        const col3 = [9, 7, 0];
        const result = merge(col1, col2, col3);
    expect(result).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 9]);
  });

});