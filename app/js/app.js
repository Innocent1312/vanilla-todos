import { TodosContainer } from './modules/todos/components/todos.container.components';

export class App {
    constructor() {
        this.todos = new TodosContainer;

    }
}

new App();