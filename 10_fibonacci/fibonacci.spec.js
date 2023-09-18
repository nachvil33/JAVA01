const fibonacci = require('./fibonacci');

describe('fibonacci', () => {
  it('4th fibonacci number is 3', () => {
    expect(fibonacci(4)).toBe(3);
  });

  it('6th fibonacci number is 8', () => {
    expect(fibonacci(6)).toBe(8);
  });

  it('10th fibonacci number is 55', () => {
    expect(fibonacci(10)).toBe(55);
  });

  it('15th fibonacci number is 610', () => {
    expect(fibonacci(15)).toBe(610);
  });

  it('25th fibonacci number is 75025', () => {
    expect(fibonacci(25)).toBe(75025);
  });

  it('doesn\'t accept negatives', () => {
    expect(() => fibonacci(-5)).toThrow('Please enter a non-negative integer.');
  });

  it('DOES accept strings', () => {
    expect(fibonacci('5')).toBe(5);
  });
});
