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

/**
 * Guarantees the return value is null
 */
test('Should be null', () => {
    expect(functions.isNull()).toBeNull();
});

/**
 * Guarantees the return value is falsy
 */
test('Should be falsy', () => {
    expect(functions.checkValue(null)).toBeFalsy();
});

/**
 * Guarantees the object or array has the expected structure and values
 */
test('User should be Brad Traversy object', () => {
    expect(functions.createUser()).toEqual({
        firstName: 'Brad',
        lastName: 'Traversy'
    });
});