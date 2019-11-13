import json from './json';
import { IAccount } from './interfaces';
import { ReturnError } from './error';

export const Accounts = {
    all: async () => {
        try {
            return await json<Array<IAccount>>('/api/accounts');
        } catch(e) {
            return ReturnError(e);
        }
    }
}

export default Accounts;