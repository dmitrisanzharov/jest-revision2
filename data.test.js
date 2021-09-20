const fetchData = require('./data.js');

test('test to see if the imported function is successful', () => {
    expect(fetchData).toBeDefined();
});

test('test to see if the imported function is successful', async () => {
    expect.assertions(1);
    let data = await fetchData();
    expect(data.username).toEqual('Bret')
});

