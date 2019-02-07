import horseman from '../src';
horseman.Auth.SetApiKey('BBYm1TVTwGUMBjGZY9Sv4f/esshVemxKFD0wJ90xPbCs1gLiCAsSmeW3ULF9ZGD9RDeIb2WSf3NduRKlYHz0z+8=');

test('Set Api Key', async () => {
    expect(horseman.Auth.GetApiKey()).toBeTruthy();
});

test('Login', async () => {
    expect(horseman.Auth.GetAuthToken()).toBeNull();
    let result = await horseman.Auth.Login('test@covalence.io', 'blahblah');
    expect(result).toBeTruthy();
    expect(horseman.Auth.GetAuthToken()).toBeTruthy();
})