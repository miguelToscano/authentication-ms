import ApiKeysRepository from "../core/repositories/ApiKeysRepository";
import ApiKeyDTO from "../core/entities/ApiKeyDTO";

export default class MemoryDb implements ApiKeysRepository {

    data = [];

    constructor() {

        console.log('Memory database alive!');
    };

    public async create(apiKey: ApiKeyDTO): Promise<ApiKeyDTO> {

        this.data.push(apiKey);

        return Promise.resolve(apiKey);
    };

    public printData(): void {

        console.table(this.data);
    };
};