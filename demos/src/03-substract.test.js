const {substract} = require('./03-substract.js');

test(' 10 - 3 to equal 7', () => {
  const result = substract(10, 3);
  expect(result).toBe(7);
}
);

test(' 3 - 10 to equal -7', () => {
  const result = substract(3, 10);
  expect(result).toBe(-7);
}
);
