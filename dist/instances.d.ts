import { IInstance } from './index';
export declare const Instances: {
    all: () => Promise<false | IInstance[]>;
    create: (instance: IInstance) => Promise<any>;
};
export default Instances;
