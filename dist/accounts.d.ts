export declare const Accounts: {
    all: () => Promise<false | IAccount[]>;
};
export interface IAccount {
    id?: number;
    name?: string;
}
export default Accounts;
