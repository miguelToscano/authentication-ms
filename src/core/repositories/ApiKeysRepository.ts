import ApiKeyDTO from "../entities/ApiKeyDTO";

export default interface ApiKeysRepository {

    create(apiKeyDTO: ApiKeyDTO): Promise<ApiKeyDTO>;
    disable(key: string): Promise<ApiKeyDTO>;
    getByKey(key: string): Promise<ApiKeyDTO>;
    getAll(): Promise<ApiKeyDTO[]>;
    printData(): void;
};
