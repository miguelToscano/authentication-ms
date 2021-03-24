import createApiKey from './createApiKey';
import disableApiKey from './disableApiKey';
import validateApiKey from './validateApiKey';
import getApiKeys from './getApiKeys';
import ApiKeysRepository from '../repositories/ApiKeysRepository';
// import MongoDb from '../../infrastructure/MongoDb';
import MemoryDb from '../../infrastructure/MemoryDb';

// const apiKeysRepository: ApiKeysRepository = new MongoDb();
const apiKeysRepository: ApiKeysRepository = new MemoryDb();

const services = {
    createApiKey: createApiKey(apiKeysRepository),
    disableApiKey: disableApiKey(apiKeysRepository),
    validateApiKey: validateApiKey(apiKeysRepository),
    getApiKeys: getApiKeys(apiKeysRepository)
}

export default services;