import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import todosContext from '../../context/todosContext'
import Todo from '../../components/TodosList/Todo/Todo'
import { BASE_URL } from '../../types'

const TodosList = () => {

    const context = useContext(todosContext);

    let todos = (
      <div className="l-empty-list">
          <p>List is empty. (Lista je prazna.)</p>
        <Link to={`${BASE_URL}/add-todo`}>Add todo (Dodaj stavku)</Link>
      </div>
    );

    if (context.todos.length) {
      todos = context.todos.map(todo => <Todo key={todo.id} {...todo} />);
    }

    return(
        <div className="l-todos">
            {todos}
        </div>
    )
}

export default TodosList;