import ApiKeyDTO from '../entities/ApiKeyDTO' ;
import ApiKeysRepository from '../repositories/ApiKeysRepository' ;

const getApiKeys = (apiKeysRepository: ApiKeysRepository) => async (): Promise<ApiKeyDTO[]> => {

    const apiKeys: ApiKeyDTO[] = await apiKeysRepository.getAll();

    return apiKeys;
};

export default getApiKeys;