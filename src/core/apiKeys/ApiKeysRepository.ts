import ApiKeyDTO from "./ApiKeyDTO";

export default interface ApiKeysRepository {
    create(apiKeyDTO: ApiKeyDTO): Promise<ApiKeyDTO>;
};
