import { TodosService } from "../services/todos.service";
import { TodosComponent } from "./todos.component";

export class TodosContainer {
    constructor() {
        this.todosService = new TodosService
        this.todosModule = this.todosService.getTodos();
        this.TodosComponent = new TodosComponent({
            services: {
                todos: this.todosService
            },
            model: this.todosModule
        })
    }
}