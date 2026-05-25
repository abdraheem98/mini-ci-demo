const { add, subtract, multiply, divide } = require('./calculator');

describe('Calculator', () => {
  describe('add', () => {
    test('adds two positive numbers', () => {
      expect(add(2, 3)).toBe(5);
    });

    test('adds negative numbers', () => {
      expect(add(-2, -3)).toBe(-5);
    });

    test('throws error on non-number input', () => {
      expect(() => add('2', 3)).toThrow('Both arguments must be numbers');
    });
  });

  describe('subtract', () => {
    test('subtracts two numbers', () => {
      expect(subtract(10, 4)).toBe(6);
    });

    test('handles negative results', () => {
      expect(subtract(3, 10)).toBe(-7);
    });
  });

  describe('multiply', () => {
    test('multiplies two numbers', () => {
      expect(multiply(4, 5)).toBe(20);
    });

    test('multiplies by zero', () => {
      expect(multiply(5, 0)).toBe(0);
    });
  });

  describe('divide', () => {
    test('divides two numbers', () => {
      expect(divide(10, 2)).toBe(5);
    });

    test('throws error on divide by zero', () => {
      expect(() => divide(10, 0)).toThrow('Cannot divide by zero');
    });
  });
});