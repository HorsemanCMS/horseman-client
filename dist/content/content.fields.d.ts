import { IContentField } from '../interfaces';
export declare const ContentFields: {
    all: (typeid: number) => Promise<false | IContentField[]>;
    create: (typeid: number, field: IContentField) => Promise<false | {
        id: string;
    }>;
    update: (fieldid: number, field: IContentField) => Promise<number | false>;
};
export default ContentFields;
