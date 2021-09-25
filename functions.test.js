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

/**
 * Verifies that the return value is less than or equal to the expected value
 * You can also use:
 * toBeLessThan()
 * toBeGreaterThan()
 * toBeGreaterThanOrEqual()
 */
test('Should be under 1600', () => {
    const load1 = 800;
    const load2 = 800;
    expect(load1 + load2).toBeLessThanOrEqual(1600);
});

/**
 * Guarantees that the input string does not have an I
 */
test('There is no I in team', () => {
    expect('team').not.toMatch(/I/);
});

/**
 * Guarantees that the input array contains the specified value
 */
test('Admin should be in usernames', () => {
    usernames = ['john', 'karen', 'admin'];
    expect(usernames).toContain('admin');
});

/**
 * Guranteeing equal strings when working with async data
 */
test('User fetched name should be Leanne Graham', () => {
    expect.assertions(1);
    return functions.fetchUser().then(data => {
        expect(data.name).toEqual('Leanne Graham');
    })
});

/**
 * Guaranteeing equal strings using async await
 */
 test('User fetched name should be Leanne Graham', async () => {
    expect.assertions(1);
    const data = await functions.fetchUser();
    expect(data.name).toEqual('Leanne Graham');
});

/**
 * Check if function exists
 */
test('Functions object exists', () => {
    expect(functions).toBeDefined();
});