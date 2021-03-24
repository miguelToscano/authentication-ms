import createApiKey from './createApiKey';
import ApiKeysRepository from '../repositories/ApiKeysRepository';
import MongoDb from '../../infrastructure/MongoDb';
import MemoryDb from '../../infrastructure/MemoryDb';

// const apiKeysRepository: ApiKeysRepository = new MongoDb();
const apiKeysRepository: ApiKeysRepository = new MemoryDb();

const services = {
    createApiKey: createApiKey(apiKeysRepository)
}

export default services;