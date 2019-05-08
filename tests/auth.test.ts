import horseman from '../src';
horseman.Auth.SetApiKey('BAH5UsTsngKFPj+UEOHPoVwgJUAuaUGlUA6iFkSAYJjNBs51Az+56EXeda2DwnLdgEv0uJgmpa+kTIi1E9zpxaU=');

test('Set Api Key', async () => {
    expect(horseman.Auth.GetApiKey()).toBeTruthy();
});

test('Login', async () => {
    expect(horseman.Auth.GetAuthToken()).toBeNull();
    let result = await horseman.Auth.Login('matt@horseman.io', 'bugsplat');
    expect(result).toBeTruthy();
    expect(horseman.Auth.GetAuthToken()).toBeTruthy();
})