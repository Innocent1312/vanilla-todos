import { Model } from '../../core/model'

export class TodosModel extends Model {
    constructor(todos) {
        super({ todos });
    }
}