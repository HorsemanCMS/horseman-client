import { IInstanceLogin } from './interfaces';
export declare const InstanceAuth: {
    login: (email: string, password: string) => Promise<false | {
        token: string;
    }>;
    register: (login: IInstanceLogin) => Promise<false | {
        token: string;
    }>;
    authToken: () => string;
};
export default InstanceAuth;
