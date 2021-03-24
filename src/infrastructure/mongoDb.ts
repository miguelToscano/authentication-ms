// import TripRepository from '../core/repositories/trip.repository';
// import Trip from '../core/entities/Trip';
// import MongoClient from 'mongodb';

// class TripMongo implements TripRepository {
//   public async getById(id: string): Promise<Trip> {
//     const collection = await this.getCollection();
//     const trip: Trip = await collection.findOne({ id });
//     return trip;
//   }

//   /// COllection per request
//   private async getCollection() {
//     const url = 'mongodb://localhost:27017';
//     const client = await MongoClient.connect(url, { useUnifiedTopology: true });

//     const db = client.db('ticketing');
//     return db.collection('trips');
//   }
// }
// export default TripMongo;

import MongoClient from 'mongodb';
import ApiKeysRepository from '../core/apiKeys/ApiKeysRepository';
import ApiKeyDTO from '../core/apiKeys/ApiKeyDTO';

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