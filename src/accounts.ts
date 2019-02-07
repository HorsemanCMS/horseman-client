import json from './json';
import { IAccount } from './interfaces';

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

export default Accounts;