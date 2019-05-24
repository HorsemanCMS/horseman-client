import horseman from '../../src';
horseman.setBaseUri('http://localhost:3001');
//horseman.Auth.SetApiKey('BBYm1TVTwGUMBjGZY9Sv4f/esshVemxKFD0wJ90xPbCs1gLiCAsSmeW3ULF9ZGD9RDeIb2WSf3NduRKlYHz0z+8='); //rightrv
horseman.Auth.SetApiKey('BAH5UsTsngKFPj+UEOHPoVwgJUAuaUGlUA6iFkSAYJjNBs51Az+56EXeda2DwnLdgEv0uJgmpa+kTIi1E9zpxaU='); //automatedtesting
// test('Register', async () => {
//     let result = await horseman.InstanceAuth.register({
//         email: 'jesttest@test.com',
//         password: 'TestPass'
//     })
//     expect(result).toBeTruthy();
// });

test('Instance Login', async () => {
    let result = await horseman.InstanceAuth.login('jesttest@test.com', 'TestPass');
    expect(result).toBeTruthy();
});


// test('Insert Record', async () => {
//     let result = await horseman.InstanceAuth.login('jesttest@test.com', 'TestPass');
//     expect(result).toBeTruthy()
//     if(result) {
//         let id = await horseman.ContentRecords.create(32, {
//             test: 'testdata:' + Math.random()
//         });
//         expect(id).toBeTruthy();
//     }
// });