import createApiKey from './createApiKey';
import * as apiKeys from '..';
import MongoDb from '../../../infrastructure/mongoDb';

const apiKeysRepository: apiKeys.ApiKeysRepository = new MongoDb();

const services = {
    createApiKey: createApiKey(apiKeysRepository)
}

export default services;