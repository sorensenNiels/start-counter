// isString.test.ts or isString.spec.ts
import { describe, expect, it } from 'vitest';
import { isString } from './isString.typeguard'; // Adjust the import path if your file is located elsewhere

describe('isString', () => {
  // Test case 1: Valid string primitives
  it('should return true for a string primitive', () => {
    expect(isString('hello')).toBe(true);
  });

  // Test case 2: Empty string
  it('should return true for an empty string', () => {
    expect(isString('')).toBe(true);
  });

  // Test case 3: String object (e.g., created with new String())
  it('should return true for a String object', () => {
    expect(isString(new String('world'))).toBe(true);
  });

  // Test case 4: String with spaces
  it('should return true for a string with spaces', () => {
    expect(isString('   ')).toBe(true);
  });

  // Test case 5: Number
  it('should return false for a number', () => {
    expect(isString(123)).toBe(false);
  });

  // Test case 6: Boolean
  it('should return false for a boolean', () => {
    expect(isString(true)).toBe(false);
    expect(isString(false)).toBe(false);
  });

  // Test case 7: Null
  it('should return false for null', () => {
    expect(isString(null)).toBe(false);
  });

  // Test case 8: Undefined
  it('should return false for undefined', () => {
    expect(isString(undefined)).toBe(false);
  });

  // Test case 9: Object
  it('should return false for an object', () => {
    expect(isString({})).toBe(false);
    expect(isString({ key: 'value' })).toBe(false);
  });

  // Test case 10: Array
  it('should return false for an array', () => {
    expect(isString([])).toBe(false);
    expect(isString(['hello'])).toBe(false);
  });

  // Test case 11: Function
  it('should return false for a function', () => {
    expect(isString(() => {})).toBe(false);
  });

  // Test case 12: Symbol
  it('should return false for a symbol', () => {
    expect(isString(Symbol('test'))).toBe(false);
  });

  // Test case 13: BigInt
  it('should return false for a BigInt', () => {
    expect(isString(BigInt(10))).toBe(false);
  });
});
