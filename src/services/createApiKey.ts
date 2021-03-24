import * as apiKeys from '../core/apiKeys';
import MongoDb from '../infrastructure/mongoDb';

const createApiKey = (apiKeyRepository: apiKeys.ApiKeysRepository) => async (apiKey: apiKeys.ApiKeyDTO): Promise<apiKeys.ApiKeyDTO> => {

    console.log('Creando api key...');

    await apiKeyRepository.create(apiKey);

    return apiKey;
};

export default createApiKey;