import json from './json';

export const Instances = {
    all: async () => {
        try {
            return await json<Array<IInstance>>('/api/instances');
        } catch(e) {
            console.log(e);
            return false;
        }
    },
    create: async (instance: IInstance) => {
        try {
            return await json('/api/instances', 'POST', instance);
        } catch(e) {
            console.log(e);
            return false;
        }
    }
}

export interface IInstance {
    id?: number;
    accountid?: number;
    name?: string;
    domain?: string;
}


export default Instances;