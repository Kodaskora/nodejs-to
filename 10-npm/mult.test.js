const mult = require('./mult');

test('should multiply 5 and 10 an return 50', () => {
  expect(mult(5, 10)).toBe(50);
});
