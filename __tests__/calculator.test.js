const { add, subtract } = require('../src/calculator');

describe('Calculator', () => {
  describe('add', () => {
    test('adds two positive numbers', () => {
      expect(add(2, 3)).toBe(5);
    });

    test('adds positive and negative numbers', () => {
      expect(add(5, -3)).toBe(2);
    });

    test('adds two negative numbers', () => {
      expect(add(-2, -3)).toBe(-5);
    });

    test('adds zero to a number', () => {
      expect(add(5, 0)).toBe(5);
    });
  });

  describe('subtract', () => {
    test('subtracts two positive numbers', () => {
      expect(subtract(5, 3)).toBe(2);
    });

    test('subtracts negative from positive', () => {
      expect(subtract(5, -3)).toBe(8);
    });

    test('subtracts positive from negative', () => {
      expect(subtract(-5, 3)).toBe(-8);
    });

    test('subtracts zero from a number', () => {
      expect(subtract(5, 0)).toBe(5);
    });
  });
});
