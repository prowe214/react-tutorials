import React from 'react';

import Todo from '../components/Todo';
import TodoStore from '../stores/TodoStore';

export default class List extends React.Component {
    render () {
        console.log('store: ',TodoStore.todos);
        const Todos = TodoStore.todos
            .map((item, i) =>
                <Todo
                    text={item.text}
                    icon={item.complete}
                    key={item.id}
                />
            );

        return (
            <div >
                <h1>List</h1>
                {Todos}

            </div>
        );
    }
}
