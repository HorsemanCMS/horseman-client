export declare const Instances: {
    all: () => Promise<false | IInstance[]>;
    create: (instance: IInstance) => Promise<any>;
};
export interface IInstance {
    id?: number;
    accountid?: number;
    name?: string;
    domain?: string;
}
export default Instances;
