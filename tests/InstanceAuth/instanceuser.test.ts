import horseman from '../../src';
horseman.setBaseUri('http://localhost:3001');
horseman.Auth.SetApiKey('BAH5UsTsngKFPj+UEOHPoVwgJUAuaUGlUA6iFkSAYJjNBs51Az+56EXeda2DwnLdgEv0uJgmpa+kTIi1E9zpxaU='); //automatedtesting

test('Record Access: User', async () => {
    let result = await horseman.InstanceAuth.login('jesttest@test.com', 'TestPass');
    expect(result).toBeTruthy();
    if(result) {
        let records = await horseman.ContentRecords.all(32);
        console.log(records);
        expect(records && records.length === 2).toBeTruthy();
    }
});