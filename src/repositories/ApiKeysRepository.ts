import ApiKey from "../core/ApiKey";

export default interface ApiKeysRepository {
    create(apiKey: ApiKey): Promise<ApiKey>;
};