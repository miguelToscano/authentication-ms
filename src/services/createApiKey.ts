import ApiKey from "../core/ApiKey"
import ApiKeysRepository from "../repositories/ApiKeysRepository";

const createApiKey = (apiKeysRepository: ApiKeysRepository) => async (apiKey: ApiKey): Promise<ApiKey> => {

    return apiKey;
};

export default createApiKey;