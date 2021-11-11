const stringLength = require('./stringLength');
const reverseString = require('./reverseString');
const capitaliseString = require('./capitaliseString');


test('returns length of the string', () => {
  expect(stringLength('Mayamiko')).toBe(8); 
});

test('returns error if string is empty or > 10', () => {
  expect(stringLength('')).toEqual("The string doesnot meet the conditions");
});

test('returns reversed string', () => {
  expect(reverseString('cat')).toBe('tac');
});

test('Returns capitalised string', () => {
  expect(capitaliseString('mango')).toBe('Mango');
});