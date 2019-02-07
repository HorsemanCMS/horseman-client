import { IAccount } from './interfaces';
export declare const Accounts: {
    all: () => Promise<false | IAccount[]>;
};
export default Accounts;
