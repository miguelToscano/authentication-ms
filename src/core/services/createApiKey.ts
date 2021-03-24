import ApiKeyDTO from '../entities/ApiKeyDTO' ;
import ApiKeysRepository from '../repositories/ApiKeysRepository' ;
import MongoDb from '../../infrastructure/mongoDb';

const createApiKey = (apiKeyRepository: ApiKeysRepository) => async (apiKey: ApiKeyDTO): Promise<ApiKeyDTO> => {

    console.log('Creando api key...');

    await apiKeyRepository.create(apiKey);

    return apiKey;
};

export default createApiKey;