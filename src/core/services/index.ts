import createApiKey from './createApiKey';
import ApiKeysRepository from '../repositories/ApiKeysRepository';
import MongoDb from '../../infrastructure/mongoDb';

const apiKeysRepository: ApiKeysRepository = new MongoDb();

const services = {
    createApiKey: createApiKey(apiKeysRepository)
}

export default services;