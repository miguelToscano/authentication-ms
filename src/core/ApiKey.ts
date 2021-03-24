export default class ApiKey {

    key: string;
    active: boolean;

    constructor(key: string, active: boolean) {
        this.key = key;
        this.active = active;
    }

    getKey() : string {
        return this.key;
    };

    getActive() : boolean {
        return this.active;
    };
};