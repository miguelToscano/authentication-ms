import ApiKeyDTO from '../entities/ApiKeyDTO' ;
import ApiKeysRepository from '../repositories/ApiKeysRepository' ;

const createApiKey = (apiKeysRepository: ApiKeysRepository) => async (apiKey: ApiKeyDTO): Promise<ApiKeyDTO> => {

    await apiKeysRepository.create(apiKey);

    apiKeysRepository.printData();

    return apiKey;
};

export default createApiKey;