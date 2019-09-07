export class TodosComponent {
    constructor(providers) {
        this.service = providers.services.todos
        this.model = providers.model
        this.model.subscribe(res => {
            this.render(res);
        })
        this.model.notify(this.model.get('todos'));
    }
    render(todos) {
        console.log(todos)
    }
}