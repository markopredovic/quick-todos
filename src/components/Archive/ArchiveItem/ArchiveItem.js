import React, { useContext } from 'react';
import todosContext from '../../../context/todosContext'

const ArchiveItem = (props) => {

    const context = useContext(todosContext);

    return (
      <li>
        <div>{props.name}
        <button onClick={() => context.backToTodos(props.id)}>back to todos</button>
        </div>
      </li>
    );
}

export default ArchiveItem;