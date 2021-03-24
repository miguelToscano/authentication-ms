export default class ApiKeyDTO {

    key: string;
    active: boolean;
    createdAt: Date;

    constructor(key: string, active: boolean) {
        this.key = key;
        this.active = active;
        this.createdAt = new Date();
    }
};