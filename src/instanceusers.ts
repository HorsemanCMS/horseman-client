import json from './json';
import { IInstanceUser } from './interfaces';

export const InstanceUsers = {
    all: async (instanceid: number) => {
        try {
            return await json<Array<IInstanceUser>>(`/api/instance/users/${instanceid}`);
        } catch(e) {
            console.log(e);
            return false;
        }
    },
    create: async (user: IInstanceUser) => {
        try {
            return await json('/api/users', 'POST', user);
        } catch(e) {
            console.log(e);
            return false;
        }
    },
    update: async (user: IInstanceUser) => {
        try {
            return await json(`/api/instance/users/${user.instanceid}`, 'PUT', user);
        } catch(e) {
            console.log(e);
            return false;
        }
    },
    invite: async (instanceid: number, email: string) => {
        try {
            return await json(`/api/instance/users/${instanceid}/invite`, 'POST', { email });
        } catch(e) {
            console.log(e);
            return false;
        }
    }
}

export default InstanceUsers;