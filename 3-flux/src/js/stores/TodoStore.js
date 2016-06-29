import { EventEmitter } from 'events';

class TodoStore extends EventEmitter {
    constructor () {
        super();
        this.todos = [
            {
                id: 3245987,
                text: 'go shopping',
                complete: false
            },
            {
                id: 9872345,
                text: 'do laundry',
                complete: false
            },
        ];
    }

    getAll() {
        return this.todos;
    }
}

const todoStore = new TodoStore;

export default todoStore;
