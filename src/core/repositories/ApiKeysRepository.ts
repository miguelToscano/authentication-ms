import ApiKeyDTO from "../entities/ApiKeyDTO";

export default interface ApiKeysRepository {
    create(apiKeyDTO: ApiKeyDTO): Promise<ApiKeyDTO>;
};
