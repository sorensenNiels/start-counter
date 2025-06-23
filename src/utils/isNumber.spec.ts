// Write tests for isNumber function
import { describe, expect, it } from 'vitest';
import { isNumber } from './isNumber';

describe('isNumber', () => {
  // Test case 1: Valid number
  it('should return true for a number', () => {
    expect(isNumber(123)).toBe(true);
  });

  // Test case 2: Number object
  it('should return true for a Number object', () => {
    expect(isNumber(new Number(123))).toBe(true);
  });

  // Test case 3: String
  it('should return false for a string', () => {
    expect(isNumber('123')).toBe(false);
  });

  // Test case 4: Boolean
  it('should return false for a boolean', () => {
    expect(isNumber(true)).toBe(false);
    expect(isNumber(false)).toBe(false);
  });

  // Test case 5: Null
  it('should return false for null', () => {
    expect(isNumber(null)).toBe(false);
  });

  // Test case 6: Undefined
  it('should return false for undefined', () => {
    expect(isNumber(undefined)).toBe(false);
  });

  // Test case 7: Object
  it('should return false for an object', () => {
    expect(isNumber({})).toBe(false);
    expect(isNumber({ key: 'value' })).toBe(false);
  });

  // Test case 8: Array
  it('should return false for an array', () => {
    expect(isNumber([])).toBe(false);
    expect(isNumber([123])).toBe(false);
  });

  // Test case 9: Function
  it('should return false for a function', () => {
    expect(isNumber(() => {})).toBe(false);
  });

  // Test case 10: Symbol
  it('should return false for a symbol', () => {
    expect(isNumber(Symbol('test'))).toBe(false);
  });

  // Test case 11: BigInt
  it('should return false for a BigInt', () => {
    expect(isNumber(BigInt(10))).toBe(false);
  });
});
