const findMax = require('./script');

test('max of 5 and 10 is 10', () => {
    expect(findMax([5, 10])).toBe(10);
})

test('Return undefined for no argument', () => {
    expect(findMax()).toBe(undefined);
})

test('Return -Infinity for empty array', () => {
    expect(findMax([])).toBe(-Infinity);
})