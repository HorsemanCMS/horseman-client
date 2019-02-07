import horseman from '../src';
horseman.setBaseUri('http://localhost:3001');
horseman.Auth.SetApiKey('BBYm1TVTwGUMBjGZY9Sv4f/esshVemxKFD0wJ90xPbCs1gLiCAsSmeW3ULF9ZGD9RDeIb2WSf3NduRKlYHz0z+8=');

// test('Register', async () => {
//     let result = await horseman.InstanceAuth.register({
//         email: 'jesttest@test.com',
//         password: 'TestPass'
//     })
//     expect(result).toBeTruthy();
// });

test('Login', async () => {
    let result = await horseman.InstanceAuth.login('jesttest@test.com', 'TestPass');
    expect(result).toBeTruthy();
});