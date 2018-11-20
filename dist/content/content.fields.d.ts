export declare const ContentFields: {
    all: (typeid: number) => Promise<false | IContentField[]>;
    create: (typeid: number, field: IContentField) => Promise<false | {
        id: string;
    }>;
    update: (fieldid: number, field: IContentField) => Promise<number | false>;
};
export interface IContentField {
    id?: number;
    datatypeid?: number;
    name?: string;
    sortorder?: number;
}
export default ContentFields;
