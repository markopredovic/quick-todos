import React, { useContext } from 'react';
import todosContext from '../../../context/todosContext';


const Todo = (props) => {

    const context = useContext(todosContext);

    return (
      <div>
        <label>
          <input
            type="checkbox"
            checked={props.isComplete}
            onChange={() => context.toggleTodo(props.id)}
          />
          {props.name}
        </label>
        <button onClick={() => context.removeTodo(props.id)} style={{marginLeft: '10px', fontSize: '10px', color: 'red'}}>remove</button>
      </div>
    );
}

export default Todo;