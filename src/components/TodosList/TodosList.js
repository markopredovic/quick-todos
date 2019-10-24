import React, { useContext } from 'react';
import todosContext from '../../context/todosContext';
import Todo from '../../components/TodosList/Todo/Todo'

const TodosList = () => {

    const context = useContext(todosContext);

    const todos = context.todos.map(todo => <Todo key={todo.id} {...todo} />)

    return(
        <div>
            {todos}
        </div>
    )
}

export default TodosList;