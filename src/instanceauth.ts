import json from './json';
import { IInstanceLogin } from './interfaces';

let token: string;

export const InstanceAuth = {
    login: async (email: string, password: string) => {
        try {
            const result = await json<{ token: string }>('/api/instance/auth/login', 'POST', {
                email,
                password
            });
            if(result) {
                token = result.token;
            }
            return result;
        } catch(e) {
            console.log(e);
            return false;
        }
    },
    register: async (login: IInstanceLogin) => {
        try {
            const result = await json<{ token: string }>('/api/instance/auth/register', 'POST', login);
            if(result) {
                token = result.token;
            }
            return result;
        } catch(e) {
            console.log(e);
            return false;
        }
    },
    authToken: () => token,
    setAuthToken: (t: string) => token = t,
}



export default InstanceAuth;