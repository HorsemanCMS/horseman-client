import json from './json';

export const Accounts = {
    all: async () => {
        try {
            return await json<Array<IAccount>>('/api/accounts');
        } catch(e) {
            console.log(e);
            return false;
        }
    }
}

export interface IAccount {
    id?: number;
    name?: string;
}

export default Accounts;