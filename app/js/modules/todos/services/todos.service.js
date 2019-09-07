import { TodosModel } from "../models/todos.model";

export class TodosService {
    constructor() {
        this.model = new TodosModel([]);
    }

    getTodos() {
        const result = [{
                id: 1,
                title: 'Some todo 1',
                completed: false
            },
            {
                id: 2,
                title: 'Some todo 2',
                completed: false
            }
        ];
        this.model.set("todos", result)
        return this.model;
    }
}