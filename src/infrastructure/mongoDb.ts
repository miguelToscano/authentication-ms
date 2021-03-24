// import MongoClient from 'mongodb';
// import ApiKeysRepository from '../core/repositories/ApiKeysRepository';
// import ApiKeyDTO from '../core/entities/ApiKeyDTO';

// const database = [];

// export default class ApiKeysMongoDb implements ApiKeysRepository {

//     client: MongoClient.MongoClient;

//     constructor() {

//         this.client = null;
//     }

//     private async initConnection(): Promise<void> {
    
//         try {
    
//             this.client = await MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true });
//             console.log(`Connection succesful: ${this.client}`);
    
//         } catch (error) {
    
//             throw error;
//         }
//     }

//     public async create(apikey: ApiKeyDTO): Promise<ApiKeyDTO> {

//         if (!this.client) {

//             await this.initConnection();
//         }

//         database.push(apikey);

//         console.table(database);

//         console.log('creating apikey');

//         return apikey;
//     };

//     public printData(): void {
//         console.log('data');
//     };
// };