import { merge } from '../src/merge';

describe('merge function', () => {
    test('should merge three sorted arrays correctly', () => {
        const col1 = [1, 3, 5];
        const col2 = [2, 4, 6];
        const col3 = [9, 7, 0];
        const result = merge(col1, col2, col3);
    expect(result).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 9]);
  });

    test('should handle empty arrays', () => {
        const col1: number[] = [];
        const col2: number[] = [];
        const col3: number[] = [];
        const result = merge(col1, col2, col3);
    expect(result).toEqual([]); 
  });
  
    test('should handle arrays with negative numbers', () => {
        const col1 = [-3, -1, 2];
        const col2 = [-2, 0, 4];
        const col3 = [3, 1, -4];
        const result = merge(col1, col2, col3);
    expect(result).toEqual([-4, -3, -2, -1, 0, 1, 2, 3, 4]);
    });

    test('should handle duplicates', () => {
        const col1 = [1, 1, 2];
        const col2 = [2, 3];
        const col3 = [1];

    expect(merge(col1, col2, col3)).toEqual([1, 1, 1, 2, 2, 3]);
    });

    test('should handle arrays of different lengths', () => {
        const col1 = [1, 4];
        const col2 = [2, 3, 5, 6];
        const col3 = [8, 7];
        const result = merge(col1, col2, col3);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
    });

});