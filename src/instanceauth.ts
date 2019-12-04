import json from './json';
import { IInstanceLogin } from './interfaces';
import { ReturnError } from './error';

let token: string;

export const InstanceAuth = {
    login: async (email: string, password: string) => {
        try {
            const result = await json<{ token: string }>('/api/instance/auth/login', 'POST', {
                email,
                password
            });
            token = result?.data?.token;
            return result;
        } catch(e) {
            return ReturnError(e);
        }
    },
    register: async (login: IInstanceLogin) => {
        try {
            const result = await json<{ token: string }>('/api/instance/auth/register', 'POST', login);
            token = result?.data?.token;
            return result;
        } catch(e) {
            return ReturnError(e);
        }
    },
    authToken: () => token,
    setAuthToken: (t: string) => token = t,
}

export default InstanceAuth;