export declare const ContentRecords: {
    all: (typeid: number) => Promise<false | IContentRecord[]>;
    one: (typeid: number, recordid: number) => Promise<false | IContentRecord>;
    create: (typeid: number, record: IContentRecord) => Promise<false | {
        id: number;
    }>;
    update: (typeid: number, recordid: number, record: IContentRecord) => Promise<false | {
        status: "success";
    }>;
};
export interface IContentRecord {
    [key: string]: string | number;
}
export default ContentRecords;
