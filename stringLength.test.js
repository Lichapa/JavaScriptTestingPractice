const stringLength = require('./stringLength');
test('returns length of the string', () => {
  expect(stringLength('Mayamiko')).toBe(8);
});