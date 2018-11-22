import json from './json';
import { IAccount } from './index';

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