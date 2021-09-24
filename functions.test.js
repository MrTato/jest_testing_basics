const functions = require('./functions');

/**
 * Guarantess the retun value is the expected value
 * Here, the function add should return 4 when passed in 2 + 2
 */
test('Adds 2 + 2 to equal 4', () => {
    expect(functions.add(2, 2)).toBe(4);
});

/**
 * Guarantees the return value is not the expected value
 * Here, the function should not return 5 when passed in 2 + 2
 */
test('Adds 2 + 2 to NOT equal 5', () => {
    expect(functions.add(2, 2)).not.toBe(5);
});

// CHECK FOR TRUTH & FALSY VALUES
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false

test('Should be null', () => {
    expect(functions.isNull()).toBeNull();
});