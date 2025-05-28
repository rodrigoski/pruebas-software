const {isEven} = require('./04-isEven.js');

test('10 is even?', () => {
  const result = isEven(10);
  expect(result).toBe(true);
}
);

test('3 is even?', () => {
  const result = isEven(3);
  expect(result).toBe(false);
}
);
