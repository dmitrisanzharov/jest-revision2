const functions = require('./basic.js');

test('test to see if the imported function is successful', () => {
    expect(functions).toBeDefined();
});

test('array should contain', () => {
    expect(functions.arr).toContain('admin')
});

test('array should contain', () => {
    const l1 = 800;
    const l2 = 700;
 
    expect(l1+l2).toBeLessThanOrEqual(1600)
});

test('array should contain', () => {
    let str = 'apple';
 
    expect(typeof str).toEqual('string')
});