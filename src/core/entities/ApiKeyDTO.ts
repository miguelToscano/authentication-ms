import { v4 as uuidv4 } from 'uuid';

export default class ApiKeyDTO {

    key: string;
    active: boolean;
    createdAt: Date;
    updatedAt: Date;

    constructor() {
        this.key = uuidv4();
        this.active = true;
        this.createdAt = new Date();
        this.updatedAt = new Date();
    };

    public isActive(): boolean {
        return this.active === true;
    };
};