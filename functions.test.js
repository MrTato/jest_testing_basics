const functions = require('./functions');

/**
 * Guarantess the retun value is the expected value
 * Here, the function add should return 4 when passed in 2 + 2
 */
test('Adds 2 + 2 to equal 4', () => {
    expect(functions.add(2, 2)).toBe(4);
});

