import createApiKey from './createApiKey';
import ApiKeysDatabase from '../infrastructure/db';

const apiKeysRepository = new ApiKeysDatabase();

export default createApiKey(apiKeysRepository);