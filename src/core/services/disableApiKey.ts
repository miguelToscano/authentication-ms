import ApiKeyDTO from '../entities/ApiKeyDTO' ;
import ApiKeysRepository from '../repositories/ApiKeysRepository' ;

const disableApiKey = (apiKeysRepository: ApiKeysRepository) => async (key: string): Promise<ApiKeyDTO> => {

    const apiKey: ApiKeyDTO = await apiKeysRepository.disable(key);

    apiKeysRepository.printData();

    return apiKey;
};

export default disableApiKey;