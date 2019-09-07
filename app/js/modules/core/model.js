import { Observable } from "./observable";

export class Model extends Observable {
    constructor(data) {
        super();
        this.data = data || {};
    }

    getRaw() {
        return this.data
    }

    set(key, value) {
        this.data[key] = value;
        this.notify(value);
    }

    get(key) {
        if (key) return this.data[key];

    }

}