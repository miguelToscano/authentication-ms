import ApiKeysRepository from "../core/repositories/ApiKeysRepository";
import ApiKeyDTO from "../core/entities/ApiKeyDTO";
import { ArrayOperator } from "mongodb";

export default class MemoryDb implements ApiKeysRepository {

    data: ApiKeyDTO[] = [];

    constructor() {

        console.log('Memory database alive!');
    };

    public async create(apiKey: ApiKeyDTO): Promise<ApiKeyDTO> {

        this.data.push(apiKey);

        return Promise.resolve(apiKey);
    };

    public async disable(key: string): Promise<ApiKeyDTO> {

        const foundApiKey: ApiKeyDTO = this.data.find(apiKey => apiKey.key === key);  

        foundApiKey.active = false;

        return Promise.resolve(foundApiKey);
    };

    public async getByKey(key: string): Promise<ApiKeyDTO> {

        const foundApiKey: ApiKeyDTO = this.data.find(apiKey => apiKey.key === key);

        return foundApiKey;
    }

    public async getAll(): Promise<ApiKeyDTO[]> {

        return Promise.resolve(this.data);
    };

    public printData(): void {

        console.table(this.data);
    };
};