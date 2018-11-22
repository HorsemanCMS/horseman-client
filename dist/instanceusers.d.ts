import { IInstanceUser } from './index';
export declare const InstanceUsers: {
    all: (instanceid: number) => Promise<false | IInstanceUser[]>;
    create: (user: IInstanceUser) => Promise<any>;
    update: (user: IInstanceUser) => Promise<any>;
    invite: (instanceid: number, email: string) => Promise<any>;
};
export default InstanceUsers;
