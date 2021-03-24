import ApiKeyDTO from '../entities/ApiKeyDTO' ;
import ApiKeysRepository from '../repositories/ApiKeysRepository' ;

const validateApiKey = (apiKeysRepository: ApiKeysRepository) => async (key: string): Promise<boolean> => {

    const apiKey: ApiKeyDTO = await apiKeysRepository.getByKey(key);

    return Promise.resolve(apiKey !== null && apiKey.isActive());
};

export default validateApiKey;