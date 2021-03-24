import MongoClient from 'mongodb';
import ApiKeysRepository from '../core/repositories/ApiKeysRepository';
import ApiKeyDTO from '../core/entities/ApiKeyDTO';

export default class ApiKeysMongoDb implements ApiKeysRepository {

    client: MongoClient.MongoClient;

    constructor() {

        this.client = null;
    }

    private async initConnection(): Promise<void> {
    
        try {
    
            this.client = await MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true });
            console.log(`Connection succesful: ${this.client}`);
    
        } catch (error) {
    
            throw error;
        }
    }

    public async create(apikeyDTO: ApiKeyDTO): Promise<ApiKeyDTO> {

        if (!this.client) {

            await this.initConnection();
        }

        console.log('creating apikey');

        return apikeyDTO;
    };
};