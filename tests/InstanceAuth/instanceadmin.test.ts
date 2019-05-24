import horseman from '../../src';
horseman.setBaseUri('http://localhost:3001');
horseman.Auth.SetApiKey('BAH5UsTsngKFPj+UEOHPoVwgJUAuaUGlUA6iFkSAYJjNBs51Az+56EXeda2DwnLdgEv0uJgmpa+kTIi1E9zpxaU='); //automatedtesting

test('Record Access: Admin', async () => {
    let result = await horseman.InstanceAuth.login('jesttest2@test.com', 'TestPass');
    expect(result).toBeTruthy();
    if(result) {
        let records = await horseman.ContentRecords.all(32);
        expect(records && records.length >= 3).toBeTruthy();
    }
});