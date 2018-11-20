import Auth from './auth';
import Instances from './instances';
import Accounts from './accounts';
import InstanceUsers from './instanceusers';
import ContentTypes from './content/content.types';
import ContentFields from './content/content.fields';
import ContentDataTypes from './content/content.datatypes';
import ContentRecords from './content/content.records';
import Roles from './roles';
import { setBaseUri } from './json';

export default {
    Auth,
    Roles,
    Instances,
    Accounts,
    InstanceUsers,
    ContentTypes,
    ContentFields,
    ContentDataTypes,
    ContentRecords,
    setBaseUri,
}