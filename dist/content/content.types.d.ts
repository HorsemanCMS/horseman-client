import { IContentType } from '../index';
export declare const ContentTypes: {
    all: (instanceid: number) => Promise<false | IContentType[]>;
    one: (typeid: number) => Promise<false | IContentType>;
    create: (contentType: IContentType, instanceid: number) => Promise<false | {
        id: number;
    }>;
    update: (contentType: IContentType, typeid: number) => Promise<number | false>;
};
export default ContentTypes;
