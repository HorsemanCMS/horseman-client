import horseman from '../src';
horseman.Auth.SetApiKey('BAH5UsTsngKFPj+UEOHPoVwgJUAuaUGlUA6iFkSAYJjNBs51Az+56EXeda2DwnLdgEv0uJgmpa+kTIi1E9zpxaU=');

test('All', async () => {
    
    let result = await horseman.ContentRecords.all(32);
    expect(result).toBeTruthy();
})